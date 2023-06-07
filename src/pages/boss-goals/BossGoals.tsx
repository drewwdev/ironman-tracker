import Barrows from "./barrows/components/Barrows";
import CommanderZilyana from "./commanderZilyana/components/CommanderZilyana";
import CorporealBeast from "./corporealBeast/components/CorporealBeast";
import DagannothKings from "./dagannothKings/components/DagannothKings";
import GeneralGraardor from "./generalGraardor/components/GeneralGraardor";
import Kreearra from "./kreearra/components/Kreearra";
import KrilTsutsaroth from "./krilTsutsaroth/components/KrilTsutsaroth";
import Nex from "./nex/components/Nex";
import Sarachnis from "./sarachnis/components/Sarachnis";
import Zulrah from "./zulrah/components/Zulrah";

function BossGoals() {
  return (
    <div className="flex">
      <div className="flex flex-col pt-24">
        <Barrows />
        <DagannothKings />
        <Sarachnis />
      </div>
      <div className="flex flex-col pt-24">
        <Zulrah />
        <Kreearra />
        <CommanderZilyana />
        <GeneralGraardor />
      </div>
      <div className="flex flex-col pt-24">
        <KrilTsutsaroth />
        <CorporealBeast />
        <Nex />
      </div>
    </div>
  );
}

export default BossGoals;
