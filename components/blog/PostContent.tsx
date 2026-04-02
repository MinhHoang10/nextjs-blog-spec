'use client'

interface PostContentProps {
  content: string
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-lg max-w-none text-gray-800">
      {content.split('\n\n').map((block, index) => (
        <p key={index} className="mb-4">
          {block}
        </p>
      ))}
    </div>
  )
}
