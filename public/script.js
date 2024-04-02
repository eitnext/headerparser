const link = document.querySelector('#link');
const output = document.querySelector('#output');

(async () => {
    try {
        const res = await fetch('http://localhost:3000/api/whoami');
        const data = await res.json();
         
        link.setAttribute('href', 'http://localhost:3000/api/whoami' );
        output.innerText = `{"ipaddress":${data.ipaddress},"language":${data.language},
        "software":${data.software}}`
        
    } catch (error) {
        console.log(error.message);
        
    }
})()