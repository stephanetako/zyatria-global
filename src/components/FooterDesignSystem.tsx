import React from 'react';

const FooterDesignSystem: React.FC = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ZyatrIA Global</h3>
            <p className="text-muted-foreground">IA Sans Frontières</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary">Agents IA</a></li>
              <li><a href="#services" className="hover:text-primary">Automatisation</a></li>
              <li><a href="#services" className="hover:text-primary">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary">À propos</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/privacy" className="hover:text-primary">Confidentialité</a></li>
              <li><a href="/terms" className="hover:text-primary">Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ZyatrIA Global. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesignSystem;
