import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold">
                    C
                  </div>
                  <span className="font-bold">Community</span>
                </div>
                <p className="text-sm">Connecting people, sharing ideas, building communities.</p>
              </div>

              {[
                { title: "Product", links: ["Features", "Platform", "Pricing"] },
                { title: "Company", links: ["About", "Blog", "Careers"] },
                { title: "Resources", links: ["Help Center", "Documentation", "API"] },
              ].map((col, i) => (
                <div key={i}>
                  <h3 className="font-semibold mb-4">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a href="#" className="text-sm hover:text-foreground transition">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm">© 2025 Community Platform. All rights reserved.</p>
              <div className="flex items-center gap-4">
                {["Twitter", "GitHub", "Discord"].map((social) => (
                  <a key={social} href="#" className="text-sm transition">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
  )
}

export default Footer