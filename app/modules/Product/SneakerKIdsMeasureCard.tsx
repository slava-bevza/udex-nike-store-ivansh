interface Props {
  img: string;
  title: string;
  description: string;
}

export const SneakerKIdsMeasureCard: React.FC<Props> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-8 min-h-96">
      <img src={img} alt={`${title} image`} />
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-medium">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
