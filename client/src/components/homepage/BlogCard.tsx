import "./BlogCard.css"

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  imgAlt?: string;
  customClass?: string;
}

export default function BlogCard({
  title,
  description,
  image,
  imgAlt,
  customClass
}: BlogCardProps) {
  return (
    <article className={`blog-card shadow ${customClass}`}>
      <img src={image} alt={imgAlt} />
      <div className="card-content">
        <p className="tag body-xxs semibold">Pet Knowledge</p>
        <h3 className="body-m bold">{title}</h3>
        <p className="body-s">{description}</p>
      </div>
    </article>
  );
}
