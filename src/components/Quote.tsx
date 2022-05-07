interface QuoteProps {
  quote: string;
}
export default function Quote({ quote }: QuoteProps) {
  return (
    <blockquote className="text-2xl leading-7 text-gray-200 my-8 font-mono ">
      {quote}
    </blockquote>
  );
}
