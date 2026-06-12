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
      className="relative inline-block"
      style={{ transform: `rotate(${rotation}deg) skewX(0.29deg)` }}
    >
      <div
        className="flex items-center justify-center overflow-hidden px-[50px] py-[50px] rounded-[10px]"
        style={{ backgroundColor: bg }}
      >
        <p
          className="whitespace-nowrap uppercase tracking-[0.8px]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight,
            fontSize,
            lineHeight: "1",
            color: textColor,
          }}
        >
          {text}
        </p>
      </div>
      {/* Outer border ring */}
      <div
        className="absolute pointer-events-none rounded-[18px]"
        style={{
          inset: "-8px",
          border: `8px solid ${borderColor}`,
        }}
        aria-hidden
      />
    </div>
  );
}

export function CtaTagsSection() {
  return (
    <section className="w-full flex flex-col items-center py-[50px] pb-[150px] overflow-hidden">
      <div className="flex flex-col items-center" style={{ gap: "-17px" }}>
        <div className="flex items-center justify-center mb-[-17px]" style={{ width: "397px", height: "135px" }}>
          <TagBox
            text="SABOR"
            bg="#171717"
            textColor="#fafafa"
            fontSize="clamp(2.5rem,4.06vw,4.875rem)"
            fontWeight="600"
            rotation={-1.58}
          />
        </div>
        <div className="flex items-center justify-center mb-[-17px]" style={{ width: "700px", height: "141px" }}>
          <TagBox
            text="MARCANTE"
            bg="#ffbd24"
            textColor="#171717"
            fontSize="clamp(3rem,5vw,6rem)"
            fontWeight="900"
            rotation={1.43}
          />
        </div>
        <div className="flex items-center justify-center mb-[-17px]" style={{ width: "599px", height: "150px" }}>
          <TagBox
            text="equilíbrio"
            bg="#171717"
            textColor="#f2f2f2"
            fontSize="clamp(2.5rem,4.06vw,4.875rem)"
            fontWeight="700"
            rotation={-2.49}
          />
        </div>
        <div className="flex items-center justify-center" style={{ width: "727px", height: "160px" }}>
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
