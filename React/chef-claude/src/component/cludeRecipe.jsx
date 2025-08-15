import ReactMarkdown from "react-markdown";

export default function CludeRecipe(props) {
  return <ReactMarkdown>{props.recipe}</ReactMarkdown>;
}
