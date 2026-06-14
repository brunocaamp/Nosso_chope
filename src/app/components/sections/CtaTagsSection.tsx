import { gridBase } from "../code/constants";

interface TagBoxProps {
  text: string;
  bg: string;
  textColor: string;
  fontSize: string;
  fontWeight: string;
  rotation: number;
  borderColor?: string;
}

function TagBox({ text, bg, textColor, fontSize, fontWeight, rotation, borderColor = "white" }: TagBoxProps) {
  return (
    <div
      className="relative inline-block skew-x-[0.29deg]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className="flex items-center justify-center overflow-hidden px-[3.125rem] py-[3.125rem] rounded-[0.625rem]"
        style={{ backgroundColor: bg }}
      >
        <p
          className="whitespace-nowrap uppercase tracking-[0.05rem] font-['Montserrat',sans-serif] leading-none"
          style={{
            fontWeight,
            fontSize,
            color: textColor,
          }}
        >
          {text}
        </p>
      </div>
      {/* Outer border ring */}
      <div
        className="absolute pointer-events-none rounded-[1.125rem] inset-[-0.5rem]"
        style={{
          border: `0.25rem solid ${borderColor}`,
        }}
        aria-hidden
      />
    </div>
  );
}

export function CtaTagsSection() {
  return (
    <section className="w-full flex flex-col items-center py-[3.125rem] pb-[9.375rem] overflow-hidden">
      <div className="flex flex-col items-center gap-[-1.0625rem]">
        <div className="flex items-center justify-center mb-[-1.0625rem] w-[24.8125rem] h-[8.4375rem]">
          <TagBox
            text="SABOR"
            bg="#171717"
            textColor="#fafafa"
            fontSize="clamp(2.5rem,4.06vw,4.875rem)"
            fontWeight="600"
            rotation={-1.58}
          />
        </div>
        <div className="flex items-center justify-center mb-[-1.0625rem] w-[43.75rem] h-[8.8125rem]">
          <TagBox
            text="MARCANTE"
            bg="#ffbd24"
            textColor="#171717"
            fontSize="clamp(3rem,5vw,6rem)"
            fontWeight="900"
            rotation={1.43}
          />
        </div>
        <div className="flex items-center justify-center mb-[-1.0625rem] w-[37.4375rem] h-[9.375rem]">
          <TagBox
            text="equilíbrio"
            bg="#171717"
            textColor="#f2f2f2"
            fontSize="clamp(2.5rem,4.06vw,4.875rem)"
            fontWeight="700"
            rotation={-2.49}
          />
        </div>
        <div className="flex items-center justify-center w-[45.4375rem] h-[10rem]">
          <TagBox
            text="perfeito"
            bg="#ffbd24"
            textColor="black"
            fontSize="clamp(3.5rem,6.04vw,7.25rem)"
            fontWeight="900"
            rotation={2.87}
          />
        </div>
      </div>
    </section>
  );
}
