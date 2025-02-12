# Lucee Installation Guide

## Quick Downloads

<div class="download-grid" markdown>

<div class="download-card" markdown>
### 📥 Installation Files

- [Windows Installer (64-bit)](downloads/lucee-windows-x64.exe){ .download-button }
- [Linux Package (64-bit)](downloads/lucee-linux-x64.tar.gz){ .download-button }
- [macOS Package](downloads/lucee-macos.pkg){ .download-button }

</div>

<div class="download-card" markdown>
### 📚 Documentation

- [Installation Guide (PDF)](downloads/installation-guide.pdf){ .download-button }
- [System Requirements (Excel)](downloads/requirements.xlsx){ .download-button }
- [Quick Reference Card](downloads/quick-ref.pdf){ .download-button }

</div>

</div>

## System Requirements

<div class="image-container" markdown>
![System Architecture](images/system-architecture.png)
*Lucee System Architecture Overview*
</div>

### Hardware Requirements

<div class="requirements-table" markdown>
| Component | Minimum | Recommended |
|:----------|:--------|:------------|
| CPU | 2 cores | 4+ cores |
| RAM | 2 GB | 4+ GB |
| Disk Space | 500 MB | 1+ GB |
| Network | 1 Mbps | 10+ Mbps |
</div>

### Software Prerequisites

=== "Windows"
    - Windows 10/11 or Server 2019/2022
    - [Java 8 or higher](https://adoptium.net){ .external-link }
    - [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe){ .external-link }

=== "Linux"
    - Ubuntu 20.04/22.04 or RHEL 8/9
    - OpenJDK 8 or higher
    - Required packages:
        ```bash
        sudo apt install fontconfig libfreetype6
        ```

=== "macOS"
    - macOS 11 (Big Sur) or higher
    - Java 8 or higher
    - Xcode Command Line Tools

## Installation Steps

### Step 1: Pre-Installation Checklist

<div class="checklist-container" markdown>
- [ ] Download the correct installer for your OS
- [ ] Verify system requirements
- [ ] Backup existing configuration (if upgrading)
- [ ] Close conflicting applications
</div>

### Step 2: Installation Process

<div class="tabs-container" markdown>
=== "Windows Installation"
    1. Run the installer as Administrator
    2. Choose installation directory
    3. Configure ports:
        ```properties
        HTTP Port: 8888
        HTTPS Port: 8443
        AJP Port: 8009
        ```
    4. Set administrator password
    5. Choose service options

    ![Windows Installation](images/windows-install.gif)

=== "Linux Installation"
    1. Extract the archive:
        ```bash
        tar xzf lucee-linux-x64.tar.gz
        ```
    2. Run the installation script:
        ```bash
        sudo ./install.sh
        ```
    3. Configure the service:
        ```bash
        sudo systemctl enable lucee
        sudo systemctl start lucee
        ```

    ![Linux Installation](images/linux-install.gif)

=== "macOS Installation"
    1. Open the package installer
    2. Follow the installation wizard
    3. Configure through System Preferences
    4. Start the service:
        ```bash
        sudo launchctl load /Library/LaunchDaemons/lucee.plist
        ```

    ![macOS Installation](images/macos-install.gif)
</div>

### Step 3: Post-Installation

<div class="alert-container" markdown>
!!! success "Verification Steps"
    1. Open web browser
    2. Visit `http://localhost:8888`
    3. Log in to admin console
    4. Run health check

!!! warning "Security Steps"
    1. Change default passwords
    2. Configure firewall rules
    3. Set up SSL certificates
    4. Review security settings
</div>

## Configuration Options

### Basic Configuration

<div class="config-table" markdown>
| Setting | Default | Recommended |
|:--------|:--------|:------------|
| Memory (Xmx) | 512MB | 2GB |
| Temp Directory | /tmp | /var/lucee/temp |
| Session Timeout | 30min | 60min |
</div>

### Advanced Settings

Download our configuration templates:

<div class="template-downloads" markdown>
- [Basic Configuration Template](downloads/basic-config.xml){ .download-button }
- [Production Configuration Template](downloads/prod-config.xml){ .download-button }
- [High-Performance Configuration](downloads/performance-config.xml){ .download-button }
</div>

## Troubleshooting

### Common Issues

<div class="accordion" markdown>
??? question "Port Conflicts"
    If ports are already in use:
    1. Check running services
    2. Choose alternative ports
    3. Update configuration

??? question "Memory Issues"
    If experiencing memory problems:
    1. Adjust JVM settings
    2. Monitor memory usage
    3. Configure garbage collection

??? question "Permission Errors"
    For permission-related issues:
    1. Verify user permissions
    2. Check file ownership
    3. Set correct SELinux context
</div>

### Diagnostic Tools

<div class="tools-grid" markdown>
- [System Health Check Tool](downloads/health-check.jar){ .download-button }
- [Log Analyzer](downloads/log-analyzer.zip){ .download-button }
- [Performance Monitor](downloads/perf-monitor.jar){ .download-button }
</div>

## Additional Resources

### Documentation

<div class="doc-container" markdown>
- [Complete Administrator Guide (PDF)](downloads/admin-guide.pdf){ .download-button }
- [Security Best Practices (PDF)](downloads/security-guide.pdf){ .download-button }
- [Performance Tuning Guide (PDF)](downloads/performance-guide.pdf){ .download-button }
</div>

### Video Tutorials

<div class="video-container" markdown>
1. [Installation Overview](https://youtube.com/watch?v=example1)
2. [Configuration Guide](https://youtube.com/watch?v=example2)
3. [Troubleshooting Tips](https://youtube.com/watch?v=example3)
</div>

<style>
/* Download Grid */
.download-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.download-card {
    padding: 1.5rem;
    border: 1px solid var(--md-primary-fg-color--light);
    border-radius: 0.5rem;
    background: var(--md-code-bg-color);
}

/* Download Buttons */
.download-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0.2rem 0;
    background-color: var(--md-primary-fg-color);
    color: var(--md-primary-bg-color) !important;
    border-radius: 0.3rem;
    text-decoration: none !important;
    transition: background-color 0.2s;
}

.download-button:hover {
    background-color: var(--md-primary-fg-color--dark);
}

/* Image Container */
.image-container {
    text-align: center;
    margin: 2rem 0;
}

.image-container img {
    max-width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Tables */
.requirements-table table,
.config-table table {
    width: 100%;
    margin: 1rem 0;
}

/* Tabs */
.tabs-container {
    margin: 2rem 0;
}

/* Alerts */
.alert-container {
    margin: 2rem 0;
}

/* Tools Grid */
.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

/* Documentation Container */
.doc-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1rem 0;
}

/* Video Container */
.video-container {
    margin: 2rem 0;
}

/* Accordion */
.accordion {
    margin: 2rem 0;
}

/* External Links */
.external-link::after {
    content: " ↗";
}

/* Checklist */
.checklist-container {
    background: var(--md-code-bg-color);
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
}
</style>
