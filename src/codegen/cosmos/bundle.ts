import * as _9 from "./app/runtime/v1alpha1/module";
import * as _10 from "./auth/module/v1/module";
import * as _11 from "./auth/v1beta1/auth";
import * as _12 from "./auth/v1beta1/genesis";
import * as _13 from "./auth/v1beta1/query";
import * as _14 from "./auth/v1beta1/tx";
import * as _15 from "./authz/module/v1/module";
import * as _16 from "./authz/v1beta1/authz";
import * as _17 from "./authz/v1beta1/event";
import * as _18 from "./authz/v1beta1/genesis";
import * as _19 from "./authz/v1beta1/query";
import * as _20 from "./authz/v1beta1/tx";
import * as _21 from "./bank/module/v1/module";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/node/v1beta1/query";
import * as _29 from "./base/query/v1beta1/pagination";
import * as _30 from "./base/reflection/v2alpha1/reflection";
import * as _31 from "./base/tendermint/v1beta1/query";
import * as _32 from "./base/tendermint/v1beta1/types";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/module/v1/module";
import * as _35 from "./consensus/module/v1/module";
import * as _36 from "./consensus/v1/query";
import * as _37 from "./consensus/v1/tx";
import * as _38 from "./crisis/module/v1/module";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./distribution/module/v1/module";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/module/v1/module";
import * as _51 from "./feegrant/module/v1/module";
import * as _52 from "./feegrant/v1beta1/feegrant";
import * as _53 from "./feegrant/v1beta1/genesis";
import * as _54 from "./feegrant/v1beta1/query";
import * as _55 from "./feegrant/v1beta1/tx";
import * as _56 from "./genutil/module/v1/module";
import * as _57 from "./gov/module/v1/module";
import * as _58 from "./gov/v1/genesis";
import * as _59 from "./gov/v1/gov";
import * as _60 from "./gov/v1/query";
import * as _61 from "./gov/v1/tx";
import * as _62 from "./gov/v1beta1/genesis";
import * as _63 from "./gov/v1beta1/gov";
import * as _64 from "./gov/v1beta1/query";
import * as _65 from "./gov/v1beta1/tx";
import * as _66 from "./group/module/v1/module";
import * as _67 from "./group/v1/events";
import * as _68 from "./group/v1/genesis";
import * as _69 from "./group/v1/query";
import * as _70 from "./group/v1/tx";
import * as _71 from "./group/v1/types";
import * as _72 from "./ics23/v1/proofs";
import * as _73 from "./mint/module/v1/module";
import * as _74 from "./mint/v1beta1/genesis";
import * as _75 from "./mint/v1beta1/mint";
import * as _76 from "./mint/v1beta1/query";
import * as _77 from "./mint/v1beta1/tx";
import * as _78 from "./nft/module/v1/module";
import * as _79 from "./orm/module/v1alpha1/module";
import * as _80 from "./orm/query/v1alpha1/query";
import * as _81 from "./params/module/v1/module";
import * as _82 from "./params/v1beta1/params";
import * as _83 from "./params/v1beta1/query";
import * as _84 from "./query/v1/query";
import * as _85 from "./reflection/v1/reflection";
import * as _86 from "./slashing/module/v1/module";
import * as _87 from "./staking/module/v1/module";
import * as _88 from "./staking/v1beta1/authz";
import * as _89 from "./staking/v1beta1/genesis";
import * as _90 from "./staking/v1beta1/lsm";
import * as _91 from "./staking/v1beta1/query";
import * as _92 from "./staking/v1beta1/staking";
import * as _93 from "./staking/v1beta1/tx";
import * as _94 from "./tx/config/v1/config";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/module/v1/module";
import * as _99 from "./upgrade/v1beta1/query";
import * as _100 from "./upgrade/v1beta1/tx";
import * as _101 from "./upgrade/v1beta1/upgrade";
import * as _102 from "./vesting/module/v1/module";
import * as _103 from "./vesting/v1beta1/tx";
import * as _104 from "./vesting/v1beta1/vesting";
import * as _300 from "./auth/v1beta1/tx.amino";
import * as _301 from "./authz/v1beta1/tx.amino";
import * as _302 from "./bank/v1beta1/tx.amino";
import * as _303 from "./consensus/v1/tx.amino";
import * as _304 from "./distribution/v1beta1/tx.amino";
import * as _305 from "./feegrant/v1beta1/tx.amino";
import * as _306 from "./gov/v1/tx.amino";
import * as _307 from "./gov/v1beta1/tx.amino";
import * as _308 from "./group/v1/tx.amino";
import * as _309 from "./mint/v1beta1/tx.amino";
import * as _310 from "./staking/v1beta1/tx.amino";
import * as _311 from "./upgrade/v1beta1/tx.amino";
import * as _312 from "./vesting/v1beta1/tx.amino";
import * as _313 from "./auth/v1beta1/tx.registry";
import * as _314 from "./authz/v1beta1/tx.registry";
import * as _315 from "./bank/v1beta1/tx.registry";
import * as _316 from "./consensus/v1/tx.registry";
import * as _317 from "./distribution/v1beta1/tx.registry";
import * as _318 from "./feegrant/v1beta1/tx.registry";
import * as _319 from "./gov/v1/tx.registry";
import * as _320 from "./gov/v1beta1/tx.registry";
import * as _321 from "./group/v1/tx.registry";
import * as _322 from "./mint/v1beta1/tx.registry";
import * as _323 from "./staking/v1beta1/tx.registry";
import * as _324 from "./upgrade/v1beta1/tx.registry";
import * as _325 from "./vesting/v1beta1/tx.registry";
import * as _326 from "./auth/v1beta1/query.lcd";
import * as _327 from "./authz/v1beta1/query.lcd";
import * as _328 from "./bank/v1beta1/query.lcd";
import * as _329 from "./base/node/v1beta1/query.lcd";
import * as _330 from "./base/tendermint/v1beta1/query.lcd";
import * as _331 from "./consensus/v1/query.lcd";
import * as _332 from "./distribution/v1beta1/query.lcd";
import * as _333 from "./feegrant/v1beta1/query.lcd";
import * as _334 from "./gov/v1/query.lcd";
import * as _335 from "./gov/v1beta1/query.lcd";
import * as _336 from "./group/v1/query.lcd";
import * as _337 from "./mint/v1beta1/query.lcd";
import * as _338 from "./params/v1beta1/query.lcd";
import * as _339 from "./staking/v1beta1/query.lcd";
import * as _340 from "./tx/v1beta1/service.lcd";
import * as _341 from "./upgrade/v1beta1/query.lcd";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._9
      };
    }
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._10
      };
    }
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._300,
      ..._313,
      ..._326
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._15
      };
    }
    export const v1beta1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._301,
      ..._314,
      ..._327
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._21
      };
    }
    export const v1beta1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._302,
      ..._315,
      ..._328
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._27
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._28,
        ..._329
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._29
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._30
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._31,
        ..._32,
        ..._330
      };
    }
    export const v1beta1 = {
      ..._33
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._34
      };
    }
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._35
      };
    }
    export const v1 = {
      ..._36,
      ..._37,
      ..._303,
      ..._316,
      ..._331
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._38
      };
    }
  }
  export namespace crypto {
    export const ed25519 = {
      ..._39
    };
    export namespace hd {
      export const v1 = {
        ..._40
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._41
      };
    }
    export const multisig = {
      ..._42
    };
    export const secp256k1 = {
      ..._43
    };
    export const secp256r1 = {
      ..._44
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._45
      };
    }
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._304,
      ..._317,
      ..._332
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._51
      };
    }
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._305,
      ..._318,
      ..._333
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._56
      };
    }
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._57
      };
    }
    export const v1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._306,
      ..._319,
      ..._334
    };
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._307,
      ..._320,
      ..._335
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
    export const v1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._308,
      ..._321,
      ..._336
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._72
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._73
      };
    }
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._309,
      ..._322,
      ..._337
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._78
      };
    }
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._79
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._80
      };
    }
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._338
    };
  }
  export namespace query {
    export const v1 = {
      ..._84
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._85
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._86
      };
    }
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._310,
      ..._323,
      ..._339
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._94
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._95
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._340
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._98
      };
    }
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._311,
      ..._324,
      ..._341
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._102
      };
    }
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._312,
      ..._325
    };
  }
}