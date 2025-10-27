import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Betreff muss mindestens 5 Zeichen lang sein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  projectType: z.string().min(1, "Bitte wählen Sie einen Projekttyp")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      projectType: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Nachricht gesendet!",
        description: "Ich melde mich innerhalb von 24 Stunden bei Ihnen zurück.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      details: "Info@AS-ProDigital.de",
      action: "mailto:Info@AS-ProDigital.de"
    },
    {
      icon: Phone,
      title: "Telefon",
      details: "+49 (0) 170 810 94 82",
      action: "tel:+4917081094082"
    },
    {
      icon: MapPin,
      title: "Standort",
      details: "Alzey",
      action: "#"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      details: "Mo-Fr: 9:00 - 18:00 Uhr",
      action: "#"
    }
  ];

  const projectTypes = [
    "Webdesign & Entwicklung",
    "SEO-Optimierung", 
    "E-Commerce",
    "Mobile App",
    "Sonstiges"
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt - AS-ProDigital Alzey | Kostenlose Beratung & Anfrage</title>
        <meta name="description" content="Kontaktieren Sie AS-ProDigital für professionelles Webdesign & SEO in Alzey. ✓ Kostenlose Beratung ✓ Schnelle Antwort ✓ Unverbindliches Angebot. Telefon: +49 170 810 94 82" />
        <meta name="keywords" content="Kontakt AS-ProDigital, Webdesign Anfrage Alzey, SEO Beratung, André Szittnick Kontakt" />
        <link rel="canonical" href="https://asprodigital.de/Kontakt" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asprodigital.de/Kontakt" />
        <meta property="og:title" content="Kontakt - AS-ProDigital Alzey" />
        <meta property="og:description" content="Jetzt unverbindlich anfragen! Professionelles Webdesign & SEO aus Alzey." />
        <meta property="og:locale" content="de_DE" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AS-ProDigital",
            "founder": {
              "@type": "Person",
              "name": "André Szittnick"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alzey",
              "addressCountry": "DE"
            },
            "telephone": "+4917081094082",
            "email": "Info@AS-ProDigital.de"
          })
        }} />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Lassen Sie uns über Ihr <span className="text-orange-500">Projekt</span> sprechen
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ich freue mich darauf, von Ihnen zu hören und gemeinsam Ihre digitale Vision zu verwirklichen. 
              Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6 md:mb-8">
                <div className="bg-orange-500 p-3 rounded-xl mr-3 md:mr-4">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Projekt anfragen
                </h2>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihr vollständiger Name" className="h-12 text-base" {...field} data-testid="input-name" />
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+49 ..." className="h-12 text-base" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Projekttyp *</FormLabel>
                          <FormControl>
                            <select 
                              {...field}
                              className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              data-testid="select-projectType"
                            >
                              <option value="">Projekttyp auswählen</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Betreff *</FormLabel>
                        <FormControl>
                          <Input placeholder="Kurze Beschreibung Ihres Projekts" className="h-12 text-base" {...field} data-testid="input-subject" />
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
                        <FormLabel>Nachricht *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beschreiben Sie Ihr Projekt im Detail. Je mehr Informationen Sie mir geben, desto besser kann ich Ihnen helfen."
                            className="min-h-[140px] md:min-h-[160px] text-base"
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
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 md:h-14 text-base md:text-lg"
                    disabled={form.formState.isSubmitting}
                    data-testid="button-submit"
                  >
                    {form.formState.isSubmitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                    Kontaktinformationen
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                    Ich bin gerne für Sie da! Nutzen Sie eine der folgenden Möglichkeiten, 
                    um mit mir in Kontakt zu treten.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.action}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center p-5 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      data-testid={`contact-info-${info.title.toLowerCase()}`}
                    >
                      <div className="bg-blue-600 p-3 md:p-4 rounded-xl mr-4 md:mr-6 group-hover:scale-110 transition-transform">
                        <info.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                          {info.details}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-blue-600 p-6 md:p-8 rounded-2xl text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                    Kostenloses Erstberatungsgespräch
                  </h3>
                  <p className="text-sm md:text-base mb-5 md:mb-6">
                    Lassen Sie uns gemeinsam über Ihr Projekt sprechen. 
                    Das erste Beratungsgespräch ist für Sie völlig kostenfrei 
                    und unverbindlich.
                  </p>
                  <div className="flex items-center text-sm md:text-base">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span>30 Minuten - Ohne Verpflichtung</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}