

function submitTextToTextArea(){
    const activity = document.getElementById('activity').value;
    const textarea = document.getElementById('textarea');
    textarea.value += activity + '\n';

}


function downloadTextAreaContent() {

    const content = document.getElementById('textarea').value;
    const docx = htmlDocx.asBlob(content);
    const anchor = document.createElement('a');
    anchor.download = 'daily_activity_report.docx';
    anchor.href = window.URL.createObjectURL(docx);
    anchor.click();
}

