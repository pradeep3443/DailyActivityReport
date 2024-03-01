

function submitTextToTextArea(){
    const activity = document.getElementById('activity').value;
    const textarea = document.getElementById('textarea');
    textarea.value += activity + '\n';

}

function downloadTextAreaContent() {
    const content = document.getElementById('textarea').value;

    // Convert the textarea content to a Word file
    mammoth.convertText(content, {contentType: 'text'}).then(function(result) {
        const blob = new Blob([result.value], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
        const anchor = document.createElement('a');
        anchor.download = 'textarea_content.docx';
        anchor.href = window.URL.createObjectURL(blob);
        anchor.click();
    }).catch(function(err) {
        console.log(err);
    });
}

