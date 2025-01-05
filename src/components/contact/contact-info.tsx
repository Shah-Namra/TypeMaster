import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
        <p className="text-muted-foreground">
          Have questions about TypeMaster? We'd love to hear from you.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <span>support@typemaster.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary" />
          <span>+91 12345 67890</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary" />
          <span>Address line 1, Aread 2, City 3 , Country 4</span>
        </div>
      </div>
    </div>
  );
}