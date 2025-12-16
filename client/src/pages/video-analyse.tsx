import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Video, CheckCircle, Clock, Send, Play, Target, TrendingUp, Eye } from "lucide-react";
import andreImage from "@assets/Andre-Szittnick_Bild_1765840488630.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const videoAnalyseFormSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  website: z.string().min(1, "Website ist erforderlich"),
  message: z.string().optional(),
});

type VideoAnalyseFormData = z.infer<typeof videoAnalyseFormSchema>;

export default function VideoAnalyse() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const form = useForm<VideoAnalyseFormData>({
    resolver: zodResolver(videoAnalyseFormSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      message: ""
    }
  });

  const onSubmit = async (data: VideoAnalyseFormData) => {
    try {
      const nameParts = data.name.trim().split(' ');
      const firstName = nameParts[0] || data.name;
      const lastName = nameParts.slice(1).join(' ') || '';
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: data.email,
          service: 'Video-Analyse',
          message: `Website: ${data.website}${data.message ? `\n\nNachricht: ${data.message}` : ''}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setIsSubmitted(true);
      setSubmitError(null);
      form.reset();
    } catch (error) {
      setSubmitError("Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt.");
    }
  };

  const handleNewInquiry = () => {
    setIsSubmitted(false);
    setSubmitError(null);
  };

  const benefits = [
    {
      icon: Eye,
      title: "Detaillierte Analyse",
      description: "Ich schaue mir Ihre Website genau an und identifiziere Optimierungspotenziale."
    },
    {
      icon: Target,
      title: "Konkrete Empfehlungen",
      description: "Sie erhalten klare, umsetzbare Tipps zur Verbesserung Ihrer Online-Präsenz."
    },
    {
      icon: TrendingUp,
      title: "Wachstumspotenzial",
      description: "Erfahren Sie, wie Sie mehr Besucher und Kunden gewinnen können."
    }
  ];

  const includes = [
    "Design & Benutzerfreundlichkeit Check",
    "Mobile-Optimierung Bewertung",
    "SEO-Grundlagen Analyse",
    "Ladezeit-Einschätzung",
    "Conversion-Potenzial Tipps",
    "Persönliche Handlungsempfehlungen"
  ];

  return (
    <>
      <Helmet>
        <title>Kostenfreie Video-Analyse Ihrer Website | AS-ProDigital Alzey</title>
        <meta name="description" content="Erhalten Sie eine kostenfreie Video-Analyse Ihrer Website. Ich zeige Ihnen persönlich, wie Sie Ihre Online-Präsenz verbessern können. ✓ Unverbindlich ✓ Individuell ✓ Innerhalb 48h" />
        <meta name="keywords" content="Website Analyse, Video Analyse, kostenlose Website Bewertung, Webdesign Check, SEO Analyse, AS-ProDigital" />
        <link rel="canonical" href="https://asprodigital.de/video-analyse" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asprodigital.de/video-analyse" />
        <meta property="og:title" content="Kostenfreie Video-Analyse Ihrer Website | AS-ProDigital" />
        <meta property="og:description" content="Erhalten Sie eine persönliche Video-Analyse Ihrer Website - völlig kostenlos und unverbindlich." />
        <meta property="og:locale" content="de_DE" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
      
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 bg-[#fa5219]/10 text-[#fa5219] px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Video className="w-4 h-4" />
                  100% Kostenlos & Unverbindlich
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                  Ihre persönliche <span className="text-[#fa5219]">Video-Analyse</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Ich erstelle für Sie eine individuelle Video-Analyse Ihrer Website. 
                  Erfahren Sie, wie Sie mehr Besucher gewinnen und Ihre Online-Präsenz auf das nächste Level bringen.
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#fa5219]" />
                    <span>Innerhalb 48 Stunden</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-[#fa5219]" />
                    <span>5-10 Minuten Video</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#fa5219]" />
                    <span>Keine Verpflichtung</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end relative order-1 lg:order-2"
              >
                <motion.div
                  className="absolute inset-0 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <div 
                    className="w-48 h-56 sm:w-64 sm:h-80 md:w-72 md:h-[350px] lg:w-80 lg:h-[400px] mx-auto rounded-3xl"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(250, 82, 25, 0.25) 0%, rgba(250, 82, 25, 0.1) 40%, transparent 70%)',
                      filter: 'blur(40px)',
                      transform: 'scale(1.2)'
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="w-48 h-56 sm:w-64 sm:h-80 md:w-72 md:h-[350px] lg:w-80 lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-2 sm:ring-4 ring-white/50 backdrop-blur-sm relative z-10"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={andreImage} 
                    alt="André Szittnick - Ihr persönlicher Ansprechpartner für die Video-Analyse"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg text-center"
                >
                  <div className="bg-[#fa5219]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-[#fa5219]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg"
              >
                {isSubmitted ? (
                  <div className="text-center py-8" data-testid="success-message">
                    <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      Vielen Dank für Ihre Anfrage!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Ich erstelle Ihre persönliche Video-Analyse und melde mich innerhalb von 48 Stunden bei Ihnen.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-[#fa5219] text-[#fa5219] hover:bg-[#fa5219] hover:text-white"
                      data-testid="button-new-request"
                    >
                      Neue Anfrage stellen
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center mb-6 md:mb-8">
                      <div className="bg-[#fa5219] p-3 rounded-xl mr-3 md:mr-4">
                        <Video className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        Video-Analyse anfordern
                      </h2>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                        {submitError}
                      </div>
                    )}

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ihr Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Max Mustermann" className="h-12 text-base" {...field} data-testid="input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-Mail *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="ihre@email.de" className="h-12 text-base" {...field} data-testid="input-email" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website-URL *</FormLabel>
                              <FormControl>
                                <Input type="text" placeholder="ihre-website.de" className="h-12 text-base" {...field} data-testid="input-website" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Worauf soll ich besonders achten? (optional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="z.B. Ich möchte mehr Anfragen über meine Website erhalten..."
                                  className="min-h-[100px] text-base"
                                  {...field}
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full bg-[#fa5219] hover:bg-orange-600 text-white h-12 md:h-14 text-base md:text-lg"
                          disabled={form.formState.isSubmitting}
                          data-testid="button-submit"
                        >
                          {form.formState.isSubmitting ? (
                            "Wird gesendet..."
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Kostenlose Video-Analyse anfordern
                            </>
                          )}
                        </Button>
                        
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                          Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
                          <a href="/datenschutz" className="text-[#fa5219] hover:underline">Datenschutzerklärung</a> zu.
                        </p>
                      </form>
                    </Form>
                  </>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-[#19243b] to-[#2a3a5c] p-6 md:p-8 rounded-2xl text-white mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                    Das erhalten Sie in Ihrer Video-Analyse:
                  </h3>
                  <ul className="space-y-3 md:space-y-4">
                    {includes.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#fa5219] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Warum eine Video-Analyse?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Im Gegensatz zu automatisierten Tools schaue ich mir Ihre Website persönlich an. 
                    Sie sehen genau, worauf ich achte und erhalten Tipps, die speziell auf Ihr Geschäft zugeschnitten sind.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Das Video können Sie sich so oft anschauen wie Sie möchten und die Empfehlungen selbst umsetzen 
                    oder mich damit beauftragen - ganz wie Sie möchten.
                  </p>
                  <p className="text-[#fa5219] font-medium mt-4">
                    – André Szittnick
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#fa5219] p-8 md:p-12 rounded-2xl text-white"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Bereit für mehr Erfolg mit Ihrer Website?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Tragen Sie jetzt Ihre Website ein und erhalten Sie wertvolle Insights - komplett kostenlos.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm opacity-80">
                <Clock className="w-4 h-4" />
                <span>Durchschnittliche Bearbeitungszeit: 24-48 Stunden</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
