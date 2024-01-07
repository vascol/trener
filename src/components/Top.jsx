import React from "react"
import img from "../assets/cli3.png"

import InstagramIcon from "@mui/icons-material/Instagram"
import TelegramIcon from "@mui/icons-material/Telegram"

export const Top = () => {
  return (
    <div className="top">
      <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8347d13cd623edd2976c8491e1678f2e~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1704744000&x-signature=crwzCzWsKfnvWa3Uorb4nvNdcoY%3D" />
      <h1>Богдан Батькович | Персональні тренування</h1>
      <h2>Тренер по бодібілдінгу та фітнесу</h2>
      <div className="top__social">
        <a href="https://www.instagram.com">
          <InstagramIcon fontSize="large" sx={{ color: "#e5eaf2" }} />
        </a>
        <a href="https://www.tiktok.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#e5eaf2"
            className="bi bi-tiktok"
            viewBox="0 0 16 16"
          >
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
          </svg>
        </a>
        <a href="https://telegram.me/@groupname">
          <TelegramIcon fontSize="large" sx={{ color: "#e5eaf2" }} />
        </a>
        <a href="tel:+380999999999">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            fill="#e5eaf2"
            viewBox="0 0 24 24"
          >
            <path
              // fill="currentColor"
              d="M11.4 0C9.473.028 5.333.344 3.02 2.467C1.302 4.187.696 6.7.633 9.817C.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302c.407-.44.972-1.084 1.397-1.58c3.85.326 6.812-.416 7.15-.525c.776-.252 5.176-.816 5.892-6.657c.74-6.02-.36-9.83-2.34-11.546c-.596-.55-3.006-2.3-8.375-2.323c0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017c4.542.02 6.717 1.388 7.222 1.846c1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395c-.28.09-2.882.737-6.153.524c0 0-2.436 2.94-3.197 3.704c-.12.12-.26.167-.352.144c-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895c.054-2.604.543-4.738 1.996-6.173c1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602a.304.304 0 0 0-.004.607c1.624.01 2.946.537 4.028 1.592c1.073 1.046 1.62 2.468 1.633 4.334c.002.167.14.3.307.3a.304.304 0 0 0 .3-.304c-.014-1.984-.618-3.596-1.816-4.764c-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695a.981.981 0 0 0-.616.117l-.01.002c-.43.247-.816.562-1.146.932c-.002.004-.006.004-.008.008c-.267.323-.42.638-.46.948a.596.596 0 0 0-.007.14c0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604c.42.768.903 1.5 1.446 2.186c.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87a15.524 15.524 0 0 0 2.186 1.447c1.328.733 2.126 1.07 2.604 1.206l.01.014a1.275 1.275 0 0 0 .54.055c.31-.036.627-.19.948-.46c.004 0 .003-.002.008-.005c.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12c-.004 0-.698-.58-1.037-.83c-.36-.255-.73-.492-1.113-.71c-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246c-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248a12.73 12.73 0 0 0-.71-1.115a28.35 28.35 0 0 0-.83-1.035a.822.822 0 0 0-.502-.297zm4.49.88a.303.303 0 0 0-.018.606c1.16.085 2.017.466 2.645 1.15c.63.688.93 1.524.906 2.57a.306.306 0 0 0 .61.013c.025-1.175-.334-2.193-1.067-2.994c-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63a.305.305 0 0 0-.3.287c-.008.167.12.31.288.32c.523.028.875.175 1.113.422c.24.245.388.62.416 1.164a.304.304 0 0 0 .605-.03c-.03-.644-.215-1.178-.58-1.557c-.367-.378-.893-.574-1.52-.607h-.018z"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}