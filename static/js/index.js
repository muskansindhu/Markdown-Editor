require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs' } });

let editor;
let selected = null;
let currentSectionId = null;

require(["vs/editor/editor.main"], function() {
    editor = monaco.editor.create(document.getElementById('markdown-content'), {
        value: ' ',
        language: 'markdown',
        theme: 'vs-dark',
        minimap: { enabled: false },
        scrollbar: { vertical: "hidden" },
        lineNumbers: "off",
        wordWrap: 'on',
        overviewRulerBorder: false,
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        glyphMargin: true,
        folding: false,
        lineDecorationsWidth: 0,
        lineNumbersMinChars: 0
    });

    editor.onDidChangeModelContent(() => {
        currentSection(); 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    dragAndDrop();
});

let sectionContent = {}; 

function updatePreview() {
    let previewContent = ""; 
    for (const key in sectionContent) {
        if (sectionContent.hasOwnProperty(key)) {
            previewContent += sectionContent[key];
        }
    }
    const htmlPreview = document.getElementById('preview-content');
    const htmlContent = marked.parse(previewContent);
    htmlPreview.innerHTML = DOMPurify.sanitize(htmlContent, { USE_PROFILES: { html: true } });
}

function dragAndDrop() {
    let lists = document.getElementsByClassName("list");
    let addedComponentBlock = document.getElementById("added-component-block");
    let markdownContent = document.getElementById('markdown-content');

    for (let list of lists) {
        list.addEventListener("dragstart", function(e) {
            selected = e.target;
        });
    }

    addedComponentBlock.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    addedComponentBlock.addEventListener("drop", function(e) {
        e.preventDefault();
        
        if (selected) {
            addedComponentBlock.appendChild(selected);
            let textToAdd = '';
            let sectionId = selected.id; 

            if (selected.innerHTML.includes('API Reference')) {
                textToAdd = apiReference();
            }
            else if (selected.innerHTML.includes('Acknowledgement')) {
                textToAdd = acknowledgement();
            }
            else if (selected.innerHTML.includes('Appendix')) {
                textToAdd = appendix();
            }
            else if (selected.innerHTML.includes('Authors')) {
                textToAdd = authors();
            }
            else {
                textToAdd = description();
            }
            
            sectionContent[sectionId] = textToAdd; 
            currentSectionId = sectionId; 
            editor.setValue(textToAdd);
            updatePreview();
            selected = null;
        }
    });
}

function currentSection() {
    if (currentSectionId) {
        const currentContent = editor.getValue();
        sectionContent[currentSectionId] = currentContent; 
        updatePreview(); 
    }
}

function selectedSection(selectedSectionId) {
    const allSections = document.querySelectorAll('.list');
    allSections.forEach(section => section.classList.remove('selected'));

    const selectedSection = document.getElementById(selectedSectionId);
    selectedSection.classList.add('selected');

    currentSectionId = selectedSectionId;
    editor.setValue(sectionContent[selectedSectionId]);
    console.log(selectedSectionId);
}