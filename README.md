# Two‑Person Live Chat Application

A simple real‑time chat app built with Node.js, Express and Socket.io.  
Users can chat back and forth in two browser windows or devices, with each person’s messages styled differently.

---

## 🚀 Features

- Real‑time messaging between two users
- Distinguishable message bubbles (“You” vs. “Other”)
- No database required
- Runs entirely locally on your machine

---

## 🛠️ Prerequisites

- **Node.js** (v14 or later) and **npm**  
  Install from [nodejs.org](https://nodejs.org) (choose the LTS version).

---

## ⚙️ Installation

1. **Clone or download** this repo into a folder, e.g. `live-chat`.  
2. Open your terminal/command prompt and navigate into the project folder:
   ```bash
   cd path/to/live-chat
   ```
Install dependencies with npm:

```bash
npm install
```
▶️ Running the App
From inside the live-chat folder (where server.js lives), start the server:

```bash
node server.js
You should see:
```

```arduino

Server is running on http://localhost:3000
Open your browser and go to http://localhost:3000.
```
When prompted, enter a username (e.g. “Alice”).

To chat with a second user, open a second browser window or tab (or another device on the same network) and visit the same URL:

```arduino
http://localhost:3000
```
Enter a different username (e.g. “Bob”).

Type messages and hit Send (or press Enter).

Your own messages appear on the right in green (“You: …”).

The other person’s messages appear on the left in white with their username.

📝 Usage
Send a message by typing in the box and clicking Send or pressing Enter.

Scroll: The chat window auto‑scrolls as new messages arrive.

To restart, simply refresh both browser windows and re‑enter usernames.

🔧 Troubleshooting
“Command not found: node”
→ Make sure Node.js is installed and added to your PATH. Reinstall from nodejs.org.

Port 3000 already in use
→ Either stop the other process using port 3000, or edit the port in server.js:

```js
const PORT = process.env.PORT || 5000;
```
Blank page or missing files
→ Verify you have this exact folder structure and that server.js is running in the project root, not under public/.

No messages appear
→ Open the browser console (F12 → Console) to check for errors (e.g. missing client.js, Socket.io connection failures).
