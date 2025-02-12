# Software Requirements

## Operating Systems

### Supported Platforms

<div class="os-grid" markdown>

<div class="os-card windows" markdown>
#### Windows
- Windows 10/11 Pro
- Windows Server 2019
- Windows Server 2022
</div>

<div class="os-card linux" markdown>
#### Linux
- Ubuntu 20.04/22.04 LTS
- Red Hat Enterprise 8/9
- CentOS Stream 8/9
</div>

<div class="os-card macos" markdown>
#### macOS
- macOS Monterey (12)
- macOS Ventura (13)
- macOS Sonoma (14)
</div>

</div>

## Java Requirements

### JDK Versions

<div class="java-compatibility" markdown>
```mermaid
graph TD
    A[Java Versions] --> B[JDK 8]
    A --> C[JDK 11]
    A --> D[JDK 17]
    B --> E[Minimum]
    C --> F[Recommended]
    D --> G[Latest Support]
```
</div>

### Java Distributions

<div class="java-table" markdown>
| Distribution | Version | Support Level |
|--------------|---------|---------------|
| Eclipse Temurin | 8, 11, 17 | Full |
| Amazon Corretto | 8, 11, 17 | Full |
| Azul Zulu | 8, 11, 17 | Full |
| Oracle JDK | 8, 11, 17 | Limited |
</div>

## Web Servers

### Compatible Servers

<div class="server-grid" markdown>

<div class="server-card" markdown>
#### Apache
- Version: 2.4+
- mod_cfml support
- mod_proxy support
</div>

<div class="server-card" markdown>
#### Nginx
- Version: 1.18+
- proxy_module
- fastcgi_module
</div>

<div class="server-card" markdown>
#### Tomcat
- Version: 9.0+
- Built-in support
- Servlet 4.0
</div>

</div>

## Database Support

### Supported Databases

<div class="db-compatibility" markdown>
```mermaid
graph LR
    A[Databases] --> B[MySQL 5.7+]
    A --> C[PostgreSQL 12+]
    A --> D[MS SQL 2019+]
    A --> E[Oracle 19c+]
    A --> F[MariaDB 10.5+]
```
</div>

### JDBC Drivers

<div class="driver-table" markdown>
| Database | Driver Version | Download Link |
|----------|----------------|---------------|
| MySQL | 8.0.28+ | [Download](https://dev.mysql.com/downloads/connector/j/){ .download-button } |
| PostgreSQL | 42.3+ | [Download](https://jdbc.postgresql.org/download/){ .download-button } |
| MS SQL | 9.4+ | [Download](https://docs.microsoft.com/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server){ .download-button } |
</div>

## Additional Software

### Required Tools

<div class="tools-grid" markdown>

<div class="tool-card" markdown>
#### Build Tools
- Maven 3.6+
- Ant 1.10+
- Git 2.30+
</div>

<div class="tool-card" markdown>
#### Development Tools
- Visual Studio Code
- IntelliJ IDEA
- Eclipse
</div>

<div class="tool-card" markdown>
#### Monitoring Tools
- JMX Console
- New Relic
- Datadog
</div>

</div>

## Browser Support

### Supported Browsers

<div class="browser-table" markdown>
| Browser | Minimum Version | Recommended Version |
|---------|----------------|-------------------|
| Chrome | 90+ | Latest |
| Firefox | 88+ | Latest |
| Safari | 14+ | Latest |
| Edge | 90+ | Latest |
</div>

## Security Software

### Compatible Security Tools

<div class="security-grid" markdown>

<div class="security-card" markdown>
#### Antivirus
- Windows Defender
- Norton
- McAfee
</div>

<div class="security-card" markdown>
#### Firewalls
- Windows Firewall
- iptables
- UFW
</div>

<div class="security-card" markdown>
#### SSL/TLS
- Let's Encrypt
- Commercial SSL
- Self-signed
</div>

</div>

<style>
/* OS Grid */
.os-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.os-card {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: var(--md-code-bg-color);
}

.os-card.windows { border-left: 4px solid #00a4ef; }
.os-card.linux { border-left: 4px solid #f65314; }
.os-card.macos { border-left: 4px solid #7d7d7d; }

/* Tables */
.java-table table,
.driver-table table,
.browser-table table {
    width: 100%;
    margin: 1rem 0;
}

/* Grids */
.server-grid,
.tools-grid,
.security-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.server-card,
.tool-card,
.security-card {
    padding: 1rem;
    background: var(--md-code-bg-color);
    border-radius: 0.5rem;
    border: 1px solid var(--md-primary-fg-color--light);
}

/* Download Buttons */
.download-button {
    display: inline-block;
    padding: 0.2rem 0.5rem;
    background-color: var(--md-primary-fg-color);
    color: var(--md-primary-bg-color) !important;
    border-radius: 0.2rem;
    text-decoration: none !important;
    font-size: 0.8rem;
}

.download-button:hover {
    background-color: var(--md-primary-fg-color--dark);
}

/* Charts */
.java-compatibility,
.db-compatibility {
    margin: 2rem 0;
    padding: 1rem;
    background: var(--md-code-bg-color);
    border-radius: 0.5rem;
}
</style>
