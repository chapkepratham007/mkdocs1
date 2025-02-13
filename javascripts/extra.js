// Handle PDF downloads
document.addEventListener('DOMContentLoaded', function() {
    // Add download tracking
    document.querySelectorAll('.download-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const fileType = this.getAttribute('data-filetype');
            const fileName = this.getAttribute('data-filename');
            console.log(`Downloading ${fileType}: ${fileName}`);
        });
    });

    // Initialize Excel previews
    document.querySelectorAll('.excel-preview').forEach(preview => {
        const url = preview.getAttribute('data-url');
        // Add Excel preview logic here
    });

    // Add copy buttons to code blocks
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent);
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = 'Copy', 2000);
        });

        block.parentNode.appendChild(button);
    });

    // Handle resource links
    document.querySelectorAll('.resource-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const resourceType = this.getAttribute('data-type');
            const resourcePath = this.getAttribute('data-path');
            
            if (resourceType === 'pdf') {
                // Open PDF in new tab
                window.open(resourcePath, '_blank');
            } else if (resourceType === 'excel') {
                // Handle Excel preview
                showExcelPreview(resourcePath);
            }
        });
    });
});

// Function to show Excel preview
function showExcelPreview(url) {
    const modal = document.createElement('div');
    modal.className = 'excel-modal';
    modal.innerHTML = `
        <div class="excel-modal__content">
            <div class="excel-modal__header">
                <h3>Excel Preview</h3>
                <button class="excel-modal__close">&times;</button>
            </div>
            <div class="excel-modal__body">
                <iframe src="${url}" frameborder="0"></iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.excel-modal__close').addEventListener('click', () => {
        modal.remove();
    });
}

// Handle table sorting
document.querySelectorAll('table.sortable').forEach(table => {
    table.querySelectorAll('th').forEach((header, index) => {
        header.addEventListener('click', () => {
            sortTable(table, index);
        });
    });
});

// Function to sort tables
function sortTable(table, column) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        const aValue = a.cells[column].textContent;
        const bValue = b.cells[column].textContent;
        return aValue.localeCompare(bValue);
    });
    
    rows.forEach(row => tbody.appendChild(row));
}
