document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Content for each section
    const sections = {
        home: {
            title: 'Let\'s Train Brand Guidelines',
            content: `
                <div class="section-content">
                    <h1>Welcome to Let's Train Brand Guidelines</h1>
                    <p>These guidelines ensure consistent representation of the Let's Train brand across all platforms and materials. They provide the essential tools and rules for maintaining our brand identity.</p>
                    <div class="download-all">
                        <button class="download-button" onclick="downloadAllAssets()">
                            <span>Download All Assets</span>
                        </button>
                    </div>
                </div>
            `
        },
        logo: {
            title: 'Logo',
            content: `
                <div class="section-content">
                    <h1>Logo</h1>
                    <div class="logo-variations">
                        <div class="variation-group">
                            <h2>Full Logo</h2>
                            <div class="variation-grid">
                                <div class="variation-item">
                                    <h3>Original Light Version</h3>
                                    <div class="logo-preview dark-bg">
                                        <img src="assets/logo-light.svg" alt="Light Logo">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/logo-light.svg', 'logo-light.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/logo-light.png', 'logo-light.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="variation-item">
                                    <h3>Original Dark Version</h3>
                                    <div class="logo-preview">
                                        <img src="assets/logo-dark.svg" alt="Dark Logo">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/logo-dark.svg', 'logo-dark.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/logo-dark.png', 'logo-dark.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="variation-grid">
                                <div class="variation-item">
                                    <h3>All White Version</h3>
                                    <div class="logo-preview dark-bg">
                                        <img src="assets/logo-white.svg" alt="White Logo">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/logo-white.svg', 'logo-white.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/logo-white.png', 'logo-white.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="variation-item">
                                    <h3>All Blue Version</h3>
                                    <div class="logo-preview">
                                        <img src="assets/logo-blue.svg" alt="Blue Logo">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/logo-blue.svg', 'logo-blue.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/logo-blue.png', 'logo-blue.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="variation-group">
                            <h2>Icon</h2>
                            <div class="variation-grid">
                                <div class="variation-item">
                                    <h3>Regular Version</h3>
                                    <div class="logo-preview">
                                        <img src="assets/icon-regular.svg" alt="Regular Icon">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/icon-regular.svg', 'icon-regular.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/icon-regular.png', 'icon-regular.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="variation-item">
                                    <h3>White Version</h3>
                                    <div class="logo-preview dark-bg">
                                        <img src="assets/icon-white.svg" alt="White Icon">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/icon-white.svg', 'icon-white.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/icon-white.png', 'icon-white.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="variation-item">
                                <h3>Blue Version</h3>
                                <div class="logo-preview">
                                    <img src="assets/icon-blue.svg" alt="Blue Icon">
                                </div>
                                <div class="download-options">
                                    <button onclick="downloadAsset('assets/icon-blue.svg', 'icon-blue.svg')" class="download-btn">
                                        <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                        <span>SVG</span>
                                    </button>
                                    <button onclick="downloadAsset('assets/downloads/icon-blue.png', 'icon-blue.png')" class="download-btn">
                                        <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                        <span>PNG</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'color-system': {
            title: 'Color System',
            content: `
                <div class="section-content">
                    <h1>Color System</h1>
                    <p>Our color palette is designed to reflect energy, professionalism, and trust.</p>
                    <div class="color-palette">
                        <div class="color-group">
                            <h2>Primary Colors</h2>
                            <div class="color-items">
                                <div class="color-item">
                                    <div class="color-preview" style="background-color: var(--color-orange)"></div>
                                    <div class="color-info">
                                        <h3>Orange</h3>
                                        <div class="color-values">
                                            <span onclick="copyToClipboard('#dd6c27')" data-color="#dd6c27">
                                                #dd6c27
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                            <span onclick="copyToClipboard('rgb(221, 108, 39)')" data-color="rgb(221, 108, 39)">
                                                RGB 221, 108, 39
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                            <span onclick="copyToClipboard('hsl(24, 71%, 51%)')" data-color="hsl(24, 71%, 51%)">
                                                HSL 24, 71%, 51%
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="color-item">
                                    <div class="color-preview" style="background-color: var(--color-blue-dark)"></div>
                                    <div class="color-info">
                                        <h3>Blue Dark</h3>
                                        <div class="color-values">
                                            <span onclick="copyToClipboard('#153258')" data-color="#153258">
                                                #153258
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                            <span onclick="copyToClipboard('rgb(21, 50, 88)')" data-color="rgb(21, 50, 88)">
                                                RGB 21, 50, 88
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                            <span onclick="copyToClipboard('hsl(217, 61%, 21%)')" data-color="hsl(217, 61%, 21%)">
                                                HSL 217, 61%, 21%
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="color-group">
                            <h2>Secondary Colors</h2>
                            <div class="color-items">
                                <div class="color-item">
                                    <div class="color-preview" style="background-color: var(--color-yellow)"></div>
                                    <div class="color-info">
                                        <h3>Yellow</h3>
                                        <div class="color-values">
                                            <span onclick="copyToClipboard('#f3cc4d')" data-color="#f3cc4d">
                                                #f3cc4d
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                            <span onclick="copyToClipboard('rgb(243, 204, 77)')" data-color="rgb(243, 204, 77)">
                                                RGB 243, 204, 77
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                            <span onclick="copyToClipboard('hsl(45, 87%, 63%)')" data-color="hsl(45, 87%, 63%)">
                                                HSL 45, 87%, 63%
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="color-item">
                                    <div class="color-preview" style="background-color: var(--color-blue-light)"></div>
                                    <div class="color-info">
                                        <h3>Blue Light</h3>
                                        <div class="color-values">
                                            <span onclick="copyToClipboard('#5dcbf1')" data-color="#5dcbf1">
                                                #5dcbf1
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                            <span onclick="copyToClipboard('rgb(93, 203, 241)')" data-color="rgb(93, 203, 241)">
                                                RGB 93, 203, 241
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                            <span onclick="copyToClipboard('hsl(197, 84%, 65%)')" data-color="hsl(197, 84%, 65%)">
                                                HSL 197, 84%, 65%
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="color-group">
                            <h2>Gradients</h2>
                            <div class="color-items">
                                <div class="color-item">
                                    <div class="gradient-preview gradient-1"></div>
                                    <div class="color-info">
                                        <h3>Orange to Yellow</h3>
                                        <div class="color-values">
                                            <span onclick="copyToClipboard('linear-gradient(45deg, #dd6c27, #f3cc4d)')" data-gradient="linear-gradient(45deg, #dd6c27, #f3cc4d)">
                                                linear-gradient(45deg, #dd6c27, #f3cc4d)
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="color-item">
                                    <div class="gradient-preview gradient-2"></div>
                                    <div class="color-info">
                                        <h3>Blue Dark to Light</h3>
                                        <div class="color-values">
                                            <span onclick="copyToClipboard('linear-gradient(45deg, #153258, #5dcbf1)')" data-gradient="linear-gradient(45deg, #153258, #5dcbf1)">
                                                linear-gradient(45deg, #153258, #5dcbf1)
                                                <img src="assets/icons/task-01-stroke-rounded.svg" alt="Copy" class="copy-icon">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        typography: {
            title: 'Typography',
            content: `
                <div class="section-content">
                    <h1>Typography</h1>
                    <p>Our typography system combines modern professionalism with approachable warmth.</p>
                    <div class="typography-showcase">
                        <div class="font-family">
                            <h2>Primary Font: Kiro</h2>
                            <div class="type-sample">
                                <div class="type-example">
                                    <h1>Heading 1</h1>
                                    <p class="specs">Font: Kiro Bold, Size: 3.2rem (51.2px), Line height: 1.2</p>
                                </div>
                                <div class="type-example">
                                    <h2>Heading 2</h2>
                                    <p class="specs">Font: Kiro Bold, Size: 2rem (32px), Line height: 1.3</p>
                                </div>
                                <div class="type-example">
                                    <h3>Heading 3</h3>
                                    <p class="specs">Font: Kiro Bold, Size: 1.5rem (24px), Line height: 1.4</p>
                                </div>
                            </div>
                            <div class="download-options">
                                <button onclick="downloadAsset('assets/Kiro-Bold.otf', 'Kiro-Bold.otf')" class="download-btn">
                                    <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                    <span>Kiro Bold (OTF) - Primary Heading Font</span>
                                </button>
                            </div>
                            <div class="font-usage">
                                <h3>Usage Guidelines</h3>
                                <ul>
                                    <li>Use Kiro Bold for all headings and major navigational elements</li>
                                    <li>Maintain appropriate heading hierarchy (H1 → H2 → H3)</li>
                                    <li>For print materials, use the pixel values shown as point sizes</li>
                                </ul>
                            </div>
                        </div>
                        <div class="font-family">
                            <h2>Secondary Font: Forma DJR Micro</h2>
                            <div class="type-sample">
                                <div class="type-example">
                                    <p style="font-size: 1.125rem; line-height: 1.6;">Large Body Text - This paragraph demonstrates the recommended line height for our large body text. Proper spacing improves readability and user experience.</p>
                                    <p class="specs">Font: Forma DJR Micro Regular, Size: 1.125rem (18px), Line height: 1.6</p>
                                </div>
                                <div class="type-example">
                                    <p style="line-height: 1.6;">Regular Body Text - This paragraph demonstrates the recommended line height for our regular body text. Proper spacing improves readability and user experience.</p>
                                    <p class="specs">Font: Forma DJR Micro Regular, Size: 1rem (16px), Line height: 1.6</p>
                                </div>
                                <div class="type-example">
                                    <p style="font-size: 0.875rem; line-height: 1.5;">Small Body Text - This paragraph demonstrates the recommended line height for our small body text. Proper spacing improves readability and user experience.</p>
                                    <p class="specs">Font: Forma DJR Micro Regular, Size: 0.875rem (14px), Line height: 1.5</p>
                                </div>
                            </div>
                            <div class="download-options">
                                <button onclick="downloadAsset('assets/FormaDJRMicro-Regular.ttf', 'FormaDJRMicro-Regular.ttf')" class="download-btn">
                                    <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                    <span>Forma DJR Micro Regular (TTF) - Primary Body Text</span>
                                </button>
                                <button onclick="downloadAsset('assets/FormaDJRMicro-Medium.ttf', 'FormaDJRMicro-Medium.ttf')" class="download-btn">
                                    <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                    <span>Forma DJR Micro Medium (TTF) - Emphasis</span>
                                </button>
                                <button onclick="downloadAsset('assets/FormaDJRMicro-Bold.ttf', 'FormaDJRMicro-Bold.ttf')" class="download-btn">
                                    <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                    <span>Forma DJR Micro Bold (TTF) - Strong Emphasis</span>
                                </button>
                            </div>
                            <div class="font-usage">
                                <h3>Usage Guidelines</h3>
                                <ul>
                                    <li>Use Forma DJR Micro for all body text, buttons, and UI elements</li>
                                    <li>Maintain a minimum font size of 14px (0.875rem) for readability</li>
                                    <li>Follow line height recommendations for optimal readability</li>
                                    <li>For print materials, use 11-12pt for body text (equivalent to 16px screen size)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'grid-system': {
            title: 'Grid System',
            content: `
                <div class="section-content">
                    <h1>Grid System</h1>
                    <p>Our grid system ensures consistent layouts across all platforms.</p>
                    
                    <div class="alert-bar grid-alert">
                        <div class="alert-content">
                            <p>Want to learn more about the 8-pt grid system?</p>
                            <a href="https://medium.com/@mertyagci/the-power-of-the-8pt-grid-system-in-design-1c9dbc683ad8#:~:text=The%208pt%20grid%20system%20represents,harmonious%20and%20cohesive%20visual%20experience." target="_blank" class="alert-button">
                                <span>Read Article</span>
                                <img src="assets/icons/link-square-02-stroke-rounded.svg" alt="External Link">
                            </a>
                        </div>
                    </div>
                    
                    <div class="grid-showcase">
                        <h2>Spacing System</h2>
                        <div class="spacing-examples">
                            <div class="spacing-item">
                                <div class="spacing-visual space-0-25"></div>
                                <p class="specs">2px - 0.25x Base Unit</p>
                            </div>
                            <div class="spacing-item">
                                <div class="spacing-visual space-0-5"></div>
                                <p class="specs">4px - 0.5x Base Unit</p>
                            </div>
                            <div class="spacing-item">
                                <div class="spacing-visual space-1"></div>
                                <p class="specs">8px - Base Unit</p>
                            </div>
                            <div class="spacing-item">
                                <div class="spacing-visual space-2"></div>
                                <p class="specs">16px - 2x Base Unit</p>
                            </div>
                            <div class="spacing-item">
                                <div class="spacing-visual space-3"></div>
                                <p class="specs">24px - 3x Base Unit</p>
                            </div>
                            <div class="spacing-item">
                                <div class="spacing-visual space-4"></div>
                                <p class="specs">32px - 4x Base Unit</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        icons: {
            title: 'Icons',
            content: `
                <div class="section-content">
                    <h1>Icons</h1>
                    <div class="icons-intro">
                        <p>Our icon system uses the Hugeicons library, carefully selected to maintain consistency across all brand materials.</p>
                    </div>
                    
                    <div class="alert-bar">
                        <div class="alert-content">
                            <p>Visit the Hugeicons website to browse and download additional icons in our brand style.</p>
                            <a href="https://hugeicons.com/icons?style=Stroke&type=Rounded" target="_blank" class="alert-button">
                                <span>Browse Hugeicons</span>
                                <img src="assets/icons/link-square-02-stroke-rounded.svg" alt="External Link">
                            </a>
                        </div>
                    </div>
                    
                    <h2>Examples:</h2>
                    <div class="icons-grid">
                        <div class="icon-item">
                            <img src="assets/icons/account-setting-01-stroke-rounded.svg" alt="Account Settings Icon">
                            <p>Account Settings</p>
                        </div>
                        <div class="icon-item">
                            <img src="assets/icons/3-d-view-stroke-rounded.svg" alt="3D View Icon">
                            <p>3D View</p>
                        </div>
                        <div class="icon-item">
                            <img src="assets/icons/book-02-stroke-rounded.svg" alt="Book Icon">
                            <p>Book</p>
                        </div>
                        <div class="icon-item">
                            <img src="assets/icons/bookmark-01-stroke-rounded.svg" alt="Bookmark Icon">
                            <p>Bookmark</p>
                        </div>
                        <div class="icon-item">
                            <img src="assets/icons/cancel-01-stroke-rounded.svg" alt="Cancel Icon">
                            <p>Cancel</p>
                        </div>
                        <div class="icon-item">
                            <img src="assets/icons/favourite-stroke-rounded.svg" alt="Favourite Icon">
                            <p>Favourite</p>
                        </div>
                        <div class="icon-item">
                            <img src="assets/icons/menu-01-stroke-rounded.svg" alt="Menu Icon">
                            <p>Menu</p>
                        </div>
                        <div class="icon-item">
                            <img src="assets/icons/location-01-stroke-rounded.svg" alt="Location Icon">
                            <p>Location</p>
                        </div>
                    </div>
                </div>
            `
        },
        'brand-shapes': {
            title: 'Brand Shapes',
            content: `
                <div class="section-content">
                    <h1>Brand Shapes</h1>
                    <p>Our brand shapes add visual interest and reinforce our identity across materials.</p>
                    <div class="shapes-display">
                        <div class="variation-group">
                            <h2>Brand Shapes</h2>
                            <div class="variation-grid">
                                <div class="variation-item">
                                    <h3>Shape 1</h3>
                                    <div class="shape-preview">
                                        <img src="assets/shape1.svg" alt="Shape 1">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/shape1.svg', 'shape1.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/shape1.png', 'shape1.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="variation-item">
                                    <h3>Shape 2</h3>
                                    <div class="shape-preview">
                                        <img src="assets/shape2.svg" alt="Shape 2">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/shape2.svg', 'shape2.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/shape2.png', 'shape2.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="variation-grid">
                                <div class="variation-item">
                                    <h3>Shape 3</h3>
                                    <div class="shape-preview">
                                        <img src="assets/shape3.svg" alt="Shape 3">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/shape3.svg', 'shape3.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/shape3.png', 'shape3.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="variation-item">
                                    <h3>Shape 4</h3>
                                    <div class="shape-preview">
                                        <img src="assets/shape4.svg" alt="Shape 4">
                                    </div>
                                    <div class="download-options">
                                        <button onclick="downloadAsset('assets/shape4.svg', 'shape4.svg')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>SVG</span>
                                        </button>
                                        <button onclick="downloadAsset('assets/downloads/shape4.png', 'shape4.png')" class="download-btn">
                                            <img src="assets/icons/download-04-stroke-rounded.svg" alt="Download">
                                            <span>PNG</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="usage-guidelines">
                            <h2>Usage Guidelines</h2>
                            <ul>
                                <li>Use shapes consistently to maintain brand recognition</li>
                                <li>Shapes can be used as background elements or as part of compositions</li>
                                <li>Maintain the aspect ratio when scaling shapes</li>
                                <li>Apply brand colors to shapes as needed for different applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        examples: {
            title: 'Examples',
            content: `
                <div class="section-content">
                    <h1>Examples</h1>
                    <p>Coming soon. This section will showcase how to apply the brand guidelines in real-world applications.</p>
                </div>
            `
        }
    };

    // Handle navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            updateContent(section);
            updateActiveLink(e.target);
        });
    });

    function updateContent(section) {
        const sectionData = sections[section];
        if (sectionData) {
            content.innerHTML = sectionData.content;
            document.title = `${sectionData.title} | Let's Train`;
        }
    }

    function updateActiveLink(clickedLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        clickedLink.classList.add('active');
    }

    // Initialize with home content
    updateContent('home');
});

// Asset download functions
function downloadAllAssets() {
    // Implementation for downloading all assets
    alert('Preparing to download all brand assets...');
    // Add actual download functionality here
}

function downloadAsset(assetPath, fileName) {
    // Implementation for downloading individual assets
    const link = document.createElement('a');
    link.href = assetPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Fix the copy to clipboard function
function copyToClipboard(text, event) {
    // Create a new toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    toast.textContent = `You have copied: ${text}`;
    document.body.appendChild(toast);
    
    // Give the browser a moment to process the DOM update before starting animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
        // Remove the toast after 2 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            // Remove the element after animation completes
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 500); // Animation duration
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        toast.classList.add('error');
        toast.textContent = 'Failed to copy';
    });
} 