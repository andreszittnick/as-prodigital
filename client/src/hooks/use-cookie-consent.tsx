import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export type ConsentStatus = 'accepted' | 'rejected' | 'custom' | null;

interface CookieConsentContextType {
  preferences: CookiePreferences;
  hasConsent: boolean;
  consentStatus: ConsentStatus;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openSettings: () => void;
  closeSettings: () => void;
  showSettings: boolean;
  hasAcceptedAll: boolean;
  hasRejectedOptional: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = 'cookie-consent-preferences';
const CONSENT_VERSION = '1.0';

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null);
  const [hasConsent, setHasConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.version === CONSENT_VERSION) {
          setPreferences(parsed.preferences);
          setConsentStatus(parsed.status || 'custom');
          setHasConsent(true);
          setShowBanner(false);
        } else {
          setHasConsent(false);
          setConsentStatus(null);
          setShowBanner(true);
        }
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveToStorage = (prefs: CookiePreferences, status: ConsentStatus) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_VERSION,
        preferences: prefs,
        status: status,
        timestamp: new Date().toISOString(),
      })
    );
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    setConsentStatus('accepted');
    saveToStorage(allAccepted, 'accepted');
    setHasConsent(true);
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(onlyNecessary);
    setConsentStatus('rejected');
    saveToStorage(onlyNecessary, 'rejected');
    setHasConsent(true);
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    const finalPrefs = { ...prefs, necessary: true };
    const isAllAccepted = finalPrefs.analytics && finalPrefs.marketing && finalPrefs.preferences;
    const isAllRejected = !finalPrefs.analytics && !finalPrefs.marketing && !finalPrefs.preferences;
    const status: ConsentStatus = isAllAccepted ? 'accepted' : isAllRejected ? 'rejected' : 'custom';
    
    setPreferences(finalPrefs);
    setConsentStatus(status);
    saveToStorage(finalPrefs, status);
    setHasConsent(true);
    setShowBanner(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const hasAcceptedAll = consentStatus === 'accepted';
  const hasRejectedOptional = consentStatus === 'rejected';

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasConsent,
        consentStatus,
        showBanner,
        acceptAll,
        rejectAll,
        savePreferences,
        openSettings,
        closeSettings,
        showSettings,
        hasAcceptedAll,
        hasRejectedOptional,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}
