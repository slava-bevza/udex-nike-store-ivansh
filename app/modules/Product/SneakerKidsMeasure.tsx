import kids1 from "~/assets/images/kids-measurement/kids-1.png";
import kids2 from "~/assets/images/kids-measurement/kids-2.png";
import kids3 from "~/assets/images/kids-measurement/kids-3.png";
import kids4 from "~/assets/images/kids-measurement/kids-4.png";
import { SneakerKIdsMeasureCard } from "./SneakerKIdsMeasureCard";

const measureCards = [
  {
    description:
      "Have the child stand up straight on a hard, flat surface with their heels against the wall. The feet should be shoulder width apart and weight balanced evenly on each foot.",
    img: kids1,
  },
  {
    description:
      "With a soft measuring tape or ruler, measure the heel-to-toe length. Be sure to measure to the longest point of the toes.",
    img: kids2,
  },
  {
    description: "Measure the other foot, as one may be longer than the other.",
    img: kids3,
  },
  {
    description:
      "Take the longest measurement and use our size charts to determine the child’s shoe size. If the measurement is between sizes, we recommend sizing up.",
    img: kids4,
  },
];

export const SneakerKidsMeasure = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {measureCards.map((card, index) => (
          <SneakerKIdsMeasureCard
            key={index}
            img={card.img}
            title={`Step ${index + 1}`}
            description={card.description}
          />
        ))}
      </div>
      <div className="space-y-4">
        <p className="text-2xl font-medium">How to Measure Tip</p>
        <p>
          If you are having issues with the above measuring method, tape a piece
          of paper to a hard flat surface, ensuring the paper doesn’t slip. Have
          the child step on to the paper, feet shoulder width apart and weight
          evenly balanced. With a pen or pencil pointed straight down, mark the
          tip of the big toe and the outermost part of the heel. Have the child
          step off the paper and use a ruler or measuring tape to measure the
          distance between the two points. This measurement represents the
          length of the foot. Repeat the process with the other foot. Apply the
          longer of the two measurements to our size chart to find the right
          size for the child, it’s common for a person’s feet to be two slightly
          different lengths. If the measurement is between sizes, we recommend
          sizing up.
        </p>
      </div>
    </div>
  );
};
