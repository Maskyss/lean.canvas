import img0 from "../../static/icons/0.svg";
import img01 from "../../static/icons/01.svg";
import img1 from "../../static/icons/1.svg";
import img2 from "../../static/icons/2.svg";
import img3 from "../../static/icons/3.svg";
import img4 from "../../static/icons/4.svg";
import img5 from "../../static/icons/5.svg";
import img6 from "../../static/icons/6.svg";
import img7 from "../../static/icons/7.svg";


const segments = [
  [
    {
      id: 'problem',
      title: "Problem",
      subtitle: "List your top 1-3 problems",
      img: img0
    }
  ],
  [
    {
      id: 'solution',
      title: "Solution",
      subtitle: "Outline a possible solution for each problem",
      img: img01
    },
    {
      id: 'keyMetrics',
      title: "Key Metrics",
      subtitle: "List the key numbers that tell you how business is doing",
      img: img1
    }
  ],
  [
    {
      id: 'uniqueValueProposition',
      title: "Unique Value Proposition",
      subtitle:
        "Signle, clear, cometting message that states why you are different and worth paying attention",
      img: img2
    }
  ],
  [
    {
      id: 'unfairAdvantage',
      title: "Unfair Advantage",
      subtitle: "Something that cannot be easily brought or copied",
      img: img3
    },
    {
      id: 'channels',
      title: "Channels",
      subtitle: "List your path to customers (Inbound or outbound)",
      img: img4
    }
  ],
  [
    {
      id: 'customerSegment',
      title: "Customer Segments",
      subtitle: "List your target customers and users",
      img: img5
    }
  ]
];

const segments1 = [
  {
    id: 'costStructure',

    title: "Cost Structure",
    subtitle: "List your fixed and variable costs.",
    img: img6
  },
  {
    id: 'revenueStreams',

    title: "Revenue Streams",
    subtitle: "List your sources of revenue.",
    img: img7
  }
];

export { segments, segments1 };
