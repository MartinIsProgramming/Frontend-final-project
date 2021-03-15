import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    {
      label: 'About',
      path: '/about',
    },

    {
      label: 'Cars',
      path: '/cars',
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-grid">
        <Link href="/">
          <a>
            <h4>CARSHOP</h4>
          </a>
        </Link>

        <div className="footer-links">
          {footerLinks.map((link, index) => {
            const { label, path } = link;
            return (
              <Link key={index} href={path}>
                <a className="link">{label}</a>
              </Link>
            );
          })}
        </div>
        <span className="text-muted">© Copyright CarShop 2020</span>
      </div>
    </footer>
  );
};

export default Footer;
