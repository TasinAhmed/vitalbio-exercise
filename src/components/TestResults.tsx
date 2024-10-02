import clsx from "clsx";
import Card from "./Card";

const userInfo = {
  name: "James Dokidis",
  patientId: 40777451,
  dateOfBirth: "1961-09-20",
  collectionTime: "1961-09-20",
};

const rangeResults = {
  outOfRange: 2,
  invalid: 3,
  inRange: 51,
};

const Dots = ({
  times,
  type,
}: {
  times: number;
  type: "out_of_range" | "invalid" | "in_range";
}) => {
  return (
    <div className="flex flex-wrap gap-1 mb-6">
      {[...Array(times)].map(() => (
        <div
          className={clsx(
            type === "out_of_range"
              ? "bg-[#FA4D56]"
              : type === "invalid"
              ? "bg-[#F1C21B]"
              : "bg-[#42BE65]",
            "w-3 h-3 rounded-full"
          )}
        ></div>
      ))}
    </div>
  );
};

const UserInfoBlock = ({
  className,
  label,
  info,
  infoClassName,
}: {
  label: string;
  info: string | number;
  className?: string;
  infoClassName?: string;
}) => {
  return (
    <div className={clsx(className, "mb-4")}>
      <div className="text-[#8F8F8F] text-lg">{label}</div>
      <div className={clsx("mb-4 text-lg", infoClassName)}>{info}</div>
    </div>
  );
};

const DotsBlock = ({
  times,
  info,
  type,
}: {
  times: number;
  info: string;
  type: "out_of_range" | "invalid" | "in_range";
}) => {
  return (
    <div>
      <Dots times={times} type={type} />
      <div className="text-lg">
        <span className="font-bold">{times}</span> {info}
      </div>
    </div>
  );
};

const Bar = () => {
  return (
    <div>
      <div className="grid grid-cols-2 h-6">
        <div className="bg-[#383838] rounded-l-md"></div>
        <div className="bg-[#FA4D56] rounded-r-md relative">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)] z-100 text-lg">
            59
          </div>
          <div className="h-6 w-6 rounded-full bg-white left-1/2 -translate-x-1/2 absolute"></div>
        </div>
      </div>
      <div className="text-center text-lg">50</div>
    </div>
  );
};

const ResultBlock = () => {
  return (
    <Card>
      <div className="flex justify-between text-lg items-center mb-10">
        <div>
          <div className="text-2xl font-bold">Triglycerides</div>
          <div className="text-[#8F8F8F]">Heart health</div>
        </div>
        <div>
          <div>246 mg/dL</div>
          <div className="text-[#FA4D56]">Out of range</div>
        </div>
      </div>
      <Bar />
    </Card>
  );
};

const TestResults = () => {
  return (
    <div className="h-full w-full max-h-full overflow-auto">
      <div className="p-4 grid grid-cols-[2fr_3fr] gap-x-4">
        <div className="relative">
          <div className="grid gap-4 grid-cols-2 self-start sticky top-[16px]">
            <Card className="col-span-2">
              <UserInfoBlock
                label="Review results for"
                info={userInfo.name}
                infoClassName="!text-4xl font-bold"
              />
              <UserInfoBlock label="Patient ID" info={userInfo.patientId} />
              <UserInfoBlock label="DOB" info={userInfo.dateOfBirth} />
              <UserInfoBlock
                label="Collection time"
                info={userInfo.collectionTime}
              />
            </Card>
            <Card>
              <DotsBlock
                info={`out of range`}
                type="out_of_range"
                times={rangeResults.outOfRange}
              />
            </Card>
            <Card>
              <DotsBlock
                info={`invalid`}
                type="invalid"
                times={rangeResults.invalid}
              />
            </Card>
            <Card className="col-span-2">
              <DotsBlock
                info={`range`}
                type="in_range"
                times={rangeResults.inRange}
              />
            </Card>
          </div>
        </div>
        <div className="grid gap-y-4">
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
          <ResultBlock />
        </div>
      </div>
    </div>
  );
};
export default TestResults;
