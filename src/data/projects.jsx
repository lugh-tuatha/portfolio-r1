import AcessignmentThumb from '../assets/img/thumb/acessignment-thumb.png'
import NftAzrielThumb from '../assets/img/thumb/Nft.azriel-thumb.png'
import EmoWallThumb from '../assets/img/thumb/EmoWall-thumb.png'

const projects = [
  {
    languages: "HTML, CSS, JavaScript and Bootstrap",
    title: "Acessignment",
    desc: "Webpage full or resources for programers.",
    live: "https://acessignment.vercel.app/",
    repo: "https://github.com/lugh-tuatha/acessignment",
    cover: AcessignmentThumb,
  },
  {
    languages: "React, CSS, Bootstrap and Vite",
    title: "Nft.azriel",
    desc: "A virtual NFT marketplace",
    live: "https://nft-azriel.vercel.app/",
    repo: "https://github.com/lugh-tuatha/nft.azriel",
    cover: NftAzrielThumb,
  },
  {
    languages: "Mongo, Express, React, Node, Tailwind and Vite",
    title: "Masked Emotion",
    desc: "Private place where people can share their deepest feelings and thoughts anonymously.",
    live: "https://masked-emotion.vercel.app/",
    repo: "https://github.com/lugh-tuatha/MaskedEmotion",
    cover: EmoWallThumb,
  },
]

export default projects;