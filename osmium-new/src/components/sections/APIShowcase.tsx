import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "Osmium Mock Engine",
    desc: "AI-generated tests with 50% real exam prediction accuracy",
  },
  {
    title: "Osmium Tutor API",
    desc: "Instant doubt resolution with step-by-step explanations",
  },
  {
    title: "Osmium Career API",
    desc: "Personalized career roadmaps based on skills and interests",
  },
];

export function APIShowcase() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative border-l border-r border-black/[0.06]">
          {/* Top divider */}
          <div className="relative">
            <div className="mt-0.5 h-[1px] w-full bg-black/[0.06]" />
          </div>

          {/* Content */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
              {/* Left — description + features */}
              <div className="relative px-4 md:px-12 text-pretty py-12 flex flex-col justify-between">

                <div>
                  <h3 className="type-xl text-black">Osmium Integration API</h3>
                  <div className="mt-4 type-base text-warm-500">
                    <p>
                      Integrate Osmium&apos;s AI-powered exam prediction, personalized
                      tutoring, and career mapping directly into your institute&apos;s
                      existing platform. Built for scale, designed for India.
                    </p>
                  </div>

                  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mt-12">
                    {features.map((f) => (
                      <div key={f.title}>
                        <h4 className="type-sm text-black">{f.title}</h4>
                        <p className="type-sm mt-3 text-warm-500">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vertical divider (desktop) */}
              <div className="hidden w-px lg:block bg-black/[0.06]" />

              {/* Right — code snippet */}
              <div className="px-4 pb-4 lg:pt-4 flex">
                <div className="relative flex w-full rounded-[1.25rem] bg-warm-50">
                  <div className="w-full overflow-auto py-5 rounded-[1.25rem] flex scrollbar-none">
                    {/* Left fade */}
                    <div
                      className="sticky left-0 w-6 flex-none"
                      style={{
                        background:
                          "linear-gradient(to right, rgb(243 243 241) 0%, rgb(243 243 241 / 0) 100%)",
                      }}
                    />

                    <pre className="text-xs leading-6 font-mono">
                      <code>
                        <span style={{ color: "#F41A2F" }}>import</span>
                        <span style={{ color: "#000" }}>{" { OsmiumClient } "}</span>
                        <span style={{ color: "#F41A2F" }}>from</span>
                        <span style={{ color: "#052F70" }}>{' "@osmium/sdk"'}</span>
                        <span style={{ color: "#000" }}>;</span>
                        {"\n\n"}
                        <span style={{ color: "#F41A2F" }}>const</span>
                        <span style={{ color: "#0A59D2" }}> client</span>
                        <span style={{ color: "#000" }}>{" = new OsmiumClient({ "}</span>
                        <span style={{ color: "#0A59D2" }}>apiKey:</span>
                        <span style={{ color: "#052F70" }}>{' "YOUR_API_KEY"'}</span>
                        <span style={{ color: "#000" }}>{" });"}</span>
                        {"\n\n"}
                        <span style={{ color: "#8A8A8A" }}>{"// Generate a mock test"}</span>
                        {"\n"}
                        <span style={{ color: "#F41A2F" }}>const</span>
                        <span style={{ color: "#0A59D2" }}> test</span>
                        <span style={{ color: "#000" }}> = </span>
                        <span style={{ color: "#F41A2F" }}>await</span>
                        <span style={{ color: "#000" }}>{" client.mockTests.generate({"}</span>
                        {"\n"}
                        <span style={{ color: "#0A59D2" }}>{"  subject:"}</span>
                        <span style={{ color: "#052F70" }}>{' "physics"'}</span>
                        <span style={{ color: "#000" }}>,</span>
                        {"\n"}
                        <span style={{ color: "#0A59D2" }}>{"  exam:"}</span>
                        <span style={{ color: "#052F70" }}>{' "jee_mains_2025"'}</span>
                        <span style={{ color: "#000" }}>,</span>
                        {"\n"}
                        <span style={{ color: "#0A59D2" }}>{"  difficulty:"}</span>
                        <span style={{ color: "#052F70" }}>{' "adaptive"'}</span>
                        <span style={{ color: "#000" }}>,</span>
                        {"\n"}
                        <span style={{ color: "#0A59D2" }}>{"  questions:"}</span>
                        <span style={{ color: "#052F70" }}> 30</span>
                        <span style={{ color: "#000" }}>,</span>
                        {"\n"}
                        <span style={{ color: "#000" }}>{"});"}</span>
                        {"\n\n"}
                        <span style={{ color: "#8A8A8A" }}>{"// Ask the AI tutor"}</span>
                        {"\n"}
                        <span style={{ color: "#F41A2F" }}>const</span>
                        <span style={{ color: "#0A59D2" }}> answer</span>
                        <span style={{ color: "#000" }}> = </span>
                        <span style={{ color: "#F41A2F" }}>await</span>
                        <span style={{ color: "#000" }}>{" client.tutor.ask({"}</span>
                        {"\n"}
                        <span style={{ color: "#0A59D2" }}>{"  question:"}</span>
                        <span style={{ color: "#052F70" }}>{' "Explain Faraday\'s law"'}</span>
                        <span style={{ color: "#000" }}>,</span>
                        {"\n"}
                        <span style={{ color: "#0A59D2" }}>{"  format:"}</span>
                        <span style={{ color: "#052F70" }}>{' "step_by_step"'}</span>
                        <span style={{ color: "#000" }}>,</span>
                        {"\n"}
                        <span style={{ color: "#000" }}>{"});"}</span>
                      </code>
                    </pre>

                    {/* Right fade */}
                    <div
                      className="sticky right-0 w-6 flex-none"
                      style={{
                        background:
                          "linear-gradient(to left, rgb(243 243 241) 0%, rgb(243 243 241 / 0) 100%)",
                      }}
                    />
                  </div>

                  {/* Inset ring */}
                  <div className="absolute inset-0 rounded-[1.25rem] ring-[0.5px] ring-black/[0.075] ring-inset pointer-events-none" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
