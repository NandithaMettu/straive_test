

export default function json2html(data) {
    
    const columns = ["Name", "Age", "Gender"];
    
    let html = `<table data-user="mettunanditha9959@gmail.com">\n`;
    html += `  <thead>\n    <tr>`;
    columns.forEach(col => {
        html += `<th>${col}</th>`;
    });
    html += `</tr>\n  </thead>\n  <tbody>\n`;

    data.forEach(row => {
        html += `    <tr>`;
        columns.forEach(col => {
            html += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
        });
        html += `</tr>\n`;
    });

    html += `  </tbody>\n</table>`;
    return html;
}
