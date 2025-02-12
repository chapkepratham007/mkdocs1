# Quick Start Guide

## Introduction

Welcome to Lucee! This guide will help you get started with <span style="color: #FF0000;">Lucee CFML Engine</span> quickly and efficiently.

!!! tip "Before You Begin"
    Make sure you have <span style="color: #00FF00;">Java 8 or higher</span> installed on your system.

## Installation Steps

### 1. Download Lucee

Download the latest version of Lucee from the official website:

<div class="highlight-box" markdown="1">
[:octicons-download-16: Download Lucee](https://download.lucee.org){ .md-button .md-button--primary }
</div>

### 2. System Requirements

Your system needs:

- <span style="color: #FF0000; text-decoration: underline;">Java 8+</span>
- <span style="color: #00FF00; text-decoration: underline;">2GB RAM minimum</span>
- <span style="color: #FFFF00; background-color: #333333;">500MB disk space</span>

### 3. Installation Process

=== "Windows"
    1. <span style="color: #FF0000;">Run the installer</span>
    2. Choose installation directory
    3. <span style="color: #00FF00; font-weight: bold;">Configure ports</span>
    4. Start Lucee

=== "Linux"
    1. <span style="color: #FF0000;">Extract the archive</span>
    2. Run setup script
    3. <span style="color: #00FF00; font-weight: bold;">Update permissions</span>
    4. Start service

## First Application

Create your first Lucee application:

```cfml title="hello.cfm" linenums="1" hl_lines="2"
<cfoutput>
    <h1 style="color: ##FF0000;">Hello, Lucee!</h1>
    <p>Current time: #now()#</p>
</cfoutput>
```

### Key Concepts

Here are some important concepts to remember:

1. <span style="color: #FF0000; font-weight: bold;">Tags</span> - Basic building blocks
2. <span style="color: #00FF00; font-weight: bold;">Functions</span> - Built-in capabilities
3. <span style="color: #FFFF00; background-color: #333333; font-weight: bold;">Expressions</span> - Dynamic content

## Configuration Options

Different ways to configure Lucee:

| Method | Scope | Difficulty |
|:------:|:-----:|:---------:|
| <span style="color: #FF0000;">Web Admin</span> | Server-wide | Easy |
| <span style="color: #00FF00;">Config Files</span> | Application | Medium |
| <span style="color: #0000FF;">Code-based</span> | Component | Advanced |

## Quick Tips

!!! success "Best Practices"
    - Use <span style="color: #FF0000; text-decoration: underline;">CFScript</span> for modern syntax
    - Keep <span style="color: #00FF00; text-decoration: underline;">security</span> in mind
    - Practice <span style="color: #0000FF; text-decoration: underline;">error handling</span>

!!! warning "Common Pitfalls"
    Be careful with:
    
    1. <mark>Case sensitivity</mark> in Linux
    2. <span style="color: #FF0000;">Memory allocation</span>
    3. <span style="color: #FFFF00; background-color: #333333;">Cache settings</span>

## Code Examples

### Basic Script

```cfml title="app.cfc" hl_lines="3 4 5"
component {
    function onApplicationStart() {
        application.startTime = now();
        application.name = "MyApp";
        application.debug = true;
    }
}
```

### Advanced Features

Here's how to use some advanced features:

<div class="grid cards" markdown>

- :material-clock-fast: __Quick Cache__
    
    ```cfml
    <cfset cache.put("key", "value")>
    ```

- :material-database: __Database__
    
    ```cfml
    <cfquery name="users">
        SELECT * FROM users
    </cfquery>
    ```

</div>

## Keyboard Shortcuts

| Action | Windows | Mac |
|:-------|:--------|:----|
| <span style="color: #FF0000;">Save</span> | ++ctrl+s++ | ++cmd+s++ |
| <span style="color: #00FF00;">Run</span> | ++f5++ | ++cmd+r++ |
| <span style="color: #0000FF;">Debug</span> | ++f9++ | ++cmd+shift+d++ |

## Next Steps

After completing this quick start guide, you might want to explore:

- [x] <span style="color: #FF0000;">Basic Syntax</span>
- [x] <span style="color: #00FF00;">Database Connections</span>
- [ ] <span style="color: #0000FF;">Advanced Features</span>
- [ ] <span style="color: #FFFF00; background-color: #333333;">Security Best Practices</span>

---

<div class="support-box" markdown="1">
Need help? Check out our [:material-help-circle: Support Resources](../support.md){ .md-button }
</div>

<style>
.highlight-box {
    padding: 1rem;
    margin: 1rem 0;
    border: 2px solid var(--md-primary-fg-color);
    border-radius: 0.5rem;
    text-align: center;
}
.support-box {
    background-color: #f8f9fa;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    text-align: center;
}
</style>
