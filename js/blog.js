


function load_blog() {
    convert_md()
}

function convert_md() {
    var text

    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'posts/nametags.md');
    httpRequest.send();

    httpRequest.onreadystatechange = () => {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                // if successful, show the response
                text = httpRequest.responseText
                target = document.getElementById('test1'),
                    converter = new showdown.Converter(),
                    html = converter.makeHtml(text);
                
                target.innerHTML = html;
            } else {
                // otherwise, oh no...
                alert('There was a problem with the request.')
            }
        }
    }

    
}