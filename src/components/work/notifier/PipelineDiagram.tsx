/**
 * The decision the notifier makes, start to finish.
 * Pure inline SVG — neutral shapes are drawn in currentColor, so the diagram
 * follows the site's text colour in both themes.
 * Two layouts of the same flow: stacked vertically on small screens, left to
 * right from md up. Each needs its own marker and label ids.
 */
const PipelineDiagram = () => {
  return (
    <figure className="w-full">
      {/* ---------------- stacked, small screens ---------------- */}
      <svg
        viewBox="0 0 310 490"
        role="img"
        aria-labelledby="pipeline-title-sm pipeline-desc-sm"
        className="md:hidden mx-auto w-full max-w-[320px] h-auto text-foreground"
      >
        <title id="pipeline-title-sm">
          What happens when a booking is made
        </title>
        <desc id="pipeline-desc-sm">
          A booking appears in the calendar. If it falls on a day I&apos;m
          working and I haven&apos;t already been told about it, the bot sends
          me a Telegram message. Otherwise it does nothing.
        </desc>

        <defs>
          <marker
            id="flow-arrow-sm"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>

        <g fontFamily="inherit">
          {/* ---------- trigger ---------- */}
          <rect
            x="40"
            y="8"
            width="230"
            height="74"
            rx="10"
            fill="currentColor"
            fillOpacity="0.05"
            stroke="currentColor"
            strokeOpacity="0.22"
            strokeWidth="1.5"
          />
          <text
            x="155"
            y="40"
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            fill="currentColor"
          >
            A booking is made
          </text>
          <text
            x="155"
            y="61"
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
            fillOpacity="0.65"
          >
            it lands in the calendar
          </text>

          {/* trigger -> condition */}
          <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5">
            <line
              x1="155"
              y1="82"
              x2="155"
              y2="116"
              markerEnd="url(#flow-arrow-sm)"
            />
          </g>
          <text
            x="165"
            y="103"
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="0.14em"
            fill="currentColor"
            fillOpacity="0.55"
          >
            IF
          </text>

          {/* ---------- condition ---------- */}
          <rect
            x="40"
            y="122"
            width="230"
            height="116"
            rx="10"
            fill="currentColor"
            fillOpacity="0.04"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <text
            x="155"
            y="160"
            textAnchor="middle"
            fontSize="14"
            fill="currentColor"
          >
            I&apos;m working that day
          </text>
          <text
            x="155"
            y="184"
            textAnchor="middle"
            fontSize="11.5"
            fontWeight="600"
            letterSpacing="0.14em"
            fill="currentColor"
            fillOpacity="0.5"
          >
            AND
          </text>
          <text
            x="155"
            y="210"
            textAnchor="middle"
            fontSize="14"
            fill="currentColor"
          >
            I haven&apos;t been told yet
          </text>

          {/* condition -> notify */}
          <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5">
            <line
              x1="155"
              y1="238"
              x2="155"
              y2="274"
              markerEnd="url(#flow-arrow-sm)"
            />
          </g>
          <text
            x="165"
            y="262"
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="0.14em"
            fill="currentColor"
            fillOpacity="0.55"
          >
            THEN
          </text>

          {/* ---------- notify ---------- */}
          <rect x="40" y="280" width="230" height="74" rx="10" fill="#6b4bd6" />
          <text
            x="155"
            y="312"
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            fill="#ffffff"
          >
            Tell me about it
          </text>
          <text
            x="155"
            y="333"
            textAnchor="middle"
            fontSize="12"
            fill="#ffffff"
            fillOpacity="0.8"
          >
            one Telegram message
          </text>

          {/* ---------- else branch ---------- */}
          <g
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            strokeDasharray="5 5"
            fill="none"
          >
            <path
              d="M 70 238 H 16 V 443 H 34"
              markerEnd="url(#flow-arrow-sm)"
              strokeLinejoin="round"
            />
          </g>
          <text
            x="68"
            y="258"
            textAnchor="end"
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="0.14em"
            fill="currentColor"
            fillOpacity="0.5"
          >
            ELSE
          </text>

          <rect
            x="40"
            y="410"
            width="230"
            height="66"
            rx="10"
            fill="currentColor"
            fillOpacity="0.03"
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          />
          <text
            x="155"
            y="441"
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            fill="currentColor"
            fillOpacity="0.55"
          >
            Stay quiet
          </text>
          <text
            x="155"
            y="461"
            textAnchor="middle"
            fontSize="12"
            fill="currentColor"
            fillOpacity="0.45"
          >
            no message
          </text>
        </g>
      </svg>

      {/* ---------------- left to right, md and up ---------------- */}
      <div className="max-md:hidden w-full overflow-x-auto">
        <svg
          viewBox="0 0 720 320"
          role="img"
          aria-labelledby="pipeline-title pipeline-desc"
          className="w-full h-auto text-foreground"
        >
          <title id="pipeline-title">What happens when a booking is made</title>
          <desc id="pipeline-desc">
            A booking appears in the calendar. If it falls on a day I'm working
            and I haven't already been told about it, the bot sends me a
            Telegram message. Otherwise it does nothing.
          </desc>

          <defs>
            <marker
              id="flow-arrow-md"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
            </marker>
          </defs>

          <g fontFamily="inherit">
            {/* ---------- trigger ---------- */}
            <rect
              x="8"
              y="70"
              width="172"
              height="80"
              rx="10"
              fill="currentColor"
              fillOpacity="0.05"
              stroke="currentColor"
              strokeOpacity="0.22"
              strokeWidth="1.5"
            />
            <text
              x="94"
              y="105"
              textAnchor="middle"
              fontSize="15"
              fontWeight="600"
              fill="currentColor"
            >
              A booking is made
            </text>
            <text
              x="94"
              y="126"
              textAnchor="middle"
              fontSize="12"
              fill="currentColor"
              fillOpacity="0.65"
            >
              it lands in the calendar
            </text>

            {/* trigger -> condition */}
            <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5">
              <line
                x1="180"
                y1="110"
                x2="232"
                y2="110"
                markerEnd="url(#flow-arrow-md)"
              />
            </g>
            <text
              x="206"
              y="98"
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="600"
              letterSpacing="0.14em"
              fill="currentColor"
              fillOpacity="0.55"
            >
              IF
            </text>

            {/* ---------- condition ---------- */}
            <rect
              x="238"
              y="50"
              width="234"
              height="120"
              rx="10"
              fill="currentColor"
              fillOpacity="0.04"
              stroke="currentColor"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <text
              x="355"
              y="91"
              textAnchor="middle"
              fontSize="14"
              fill="currentColor"
            >
              I&apos;m working that day
            </text>
            <text
              x="355"
              y="114"
              textAnchor="middle"
              fontSize="11.5"
              fontWeight="600"
              letterSpacing="0.14em"
              fill="currentColor"
              fillOpacity="0.5"
            >
              AND
            </text>
            <text
              x="355"
              y="138"
              textAnchor="middle"
              fontSize="14"
              fill="currentColor"
            >
              I haven&apos;t been told yet
            </text>

            {/* condition -> notify */}
            <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5">
              <line
                x1="472"
                y1="110"
                x2="524"
                y2="110"
                markerEnd="url(#flow-arrow-md)"
              />
            </g>
            <text
              x="498"
              y="98"
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="600"
              letterSpacing="0.14em"
              fill="currentColor"
              fillOpacity="0.55"
            >
              THEN
            </text>

            {/* ---------- notify ---------- */}
            <rect
              x="530"
              y="70"
              width="182"
              height="80"
              rx="10"
              fill="#6b4bd6"
            />
            <text
              x="621"
              y="105"
              textAnchor="middle"
              fontSize="15"
              fontWeight="600"
              fill="#ffffff"
            >
              Tell me about it
            </text>
            <text
              x="621"
              y="126"
              textAnchor="middle"
              fontSize="12"
              fill="#ffffff"
              fillOpacity="0.8"
            >
              one Telegram message
            </text>

            {/* ---------- else branch ---------- */}
            <g
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              strokeDasharray="5 5"
              fill="none"
            >
              <path
                d="M 355 170 V 267 H 524"
                markerEnd="url(#flow-arrow-md)"
                strokeLinejoin="round"
              />
            </g>
            <text
              x="430"
              y="256"
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="600"
              letterSpacing="0.14em"
              fill="currentColor"
              fillOpacity="0.5"
            >
              ELSE
            </text>

            <rect
              x="530"
              y="232"
              width="182"
              height="70"
              rx="10"
              fill="currentColor"
              fillOpacity="0.03"
              stroke="currentColor"
              strokeOpacity="0.18"
              strokeWidth="1.5"
            />
            <text
              x="621"
              y="263"
              textAnchor="middle"
              fontSize="15"
              fontWeight="600"
              fill="currentColor"
              fillOpacity="0.55"
            >
              Stay quiet
            </text>
            <text
              x="621"
              y="283"
              textAnchor="middle"
              fontSize="12"
              fill="currentColor"
              fillOpacity="0.45"
            >
              no message
            </text>
          </g>
        </svg>
      </div>
    </figure>
  );
};

export default PipelineDiagram;
