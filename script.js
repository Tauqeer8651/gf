function changeMessage() {
    const messageSection = document.getElementById('message');
    messageSection.innerHTML = `
        <h2>Message for You</h2>
        <p>You are the most amazing person I’ve ever met, and I’m grateful every single day that you're in my life.</p>
        <button onclick="changeMessage()">Click to Change Message</button>
    `;
}
