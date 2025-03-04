import * as _117 from "./applications/interchain_accounts/controller/v1/controller";
import * as _118 from "./applications/interchain_accounts/controller/v1/query";
import * as _119 from "./applications/interchain_accounts/controller/v1/tx";
import * as _120 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _121 from "./applications/interchain_accounts/host/v1/host";
import * as _122 from "./applications/interchain_accounts/host/v1/query";
import * as _123 from "./applications/interchain_accounts/v1/account";
import * as _124 from "./applications/interchain_accounts/v1/metadata";
import * as _125 from "./applications/interchain_accounts/v1/packet";
import * as _126 from "./applications/transfer/v1/authz";
import * as _127 from "./applications/transfer/v1/genesis";
import * as _128 from "./applications/transfer/v1/query";
import * as _129 from "./applications/transfer/v1/transfer";
import * as _130 from "./applications/transfer/v1/tx";
import * as _131 from "./applications/transfer/v2/packet";
import * as _132 from "./core/channel/v1/channel";
import * as _133 from "./core/channel/v1/genesis";
import * as _134 from "./core/channel/v1/query";
import * as _135 from "./core/channel/v1/tx";
import * as _136 from "./core/client/v1/client";
import * as _137 from "./core/client/v1/genesis";
import * as _138 from "./core/client/v1/query";
import * as _139 from "./core/client/v1/tx";
import * as _140 from "./core/commitment/v1/commitment";
import * as _141 from "./core/connection/v1/connection";
import * as _142 from "./core/connection/v1/genesis";
import * as _143 from "./core/connection/v1/query";
import * as _144 from "./core/connection/v1/tx";
import * as _145 from "./lightclients/localhost/v2/localhost";
import * as _146 from "./lightclients/solomachine/v2/solomachine";
import * as _147 from "./lightclients/solomachine/v3/solomachine";
import * as _148 from "./lightclients/tendermint/v1/tendermint";
import * as _330 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _331 from "./applications/transfer/v1/tx.amino";
import * as _332 from "./core/channel/v1/tx.amino";
import * as _333 from "./core/client/v1/tx.amino";
import * as _334 from "./core/connection/v1/tx.amino";
import * as _335 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _336 from "./applications/transfer/v1/tx.registry";
import * as _337 from "./core/channel/v1/tx.registry";
import * as _338 from "./core/client/v1/tx.registry";
import * as _339 from "./core/connection/v1/tx.registry";
import * as _340 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _341 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _342 from "./applications/transfer/v1/query.lcd";
import * as _343 from "./core/channel/v1/query.lcd";
import * as _344 from "./core/client/v1/query.lcd";
import * as _345 from "./core/connection/v1/query.lcd";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._117,
          ..._118,
          ..._119,
          ..._330,
          ..._335,
          ..._340
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._120
        };
      }
      export namespace host {
        export const v1 = {
          ..._121,
          ..._122,
          ..._341
        };
      }
      export const v1 = {
        ..._123,
        ..._124,
        ..._125
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._331,
        ..._336,
        ..._342
      };
      export const v2 = {
        ..._131
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._132,
        ..._133,
        ..._134,
        ..._135,
        ..._332,
        ..._337,
        ..._343
      };
    }
    export namespace client {
      export const v1 = {
        ..._136,
        ..._137,
        ..._138,
        ..._139,
        ..._333,
        ..._338,
        ..._344
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._140
      };
    }
    export namespace connection {
      export const v1 = {
        ..._141,
        ..._142,
        ..._143,
        ..._144,
        ..._334,
        ..._339,
        ..._345
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._145
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._146
      };
      export const v3 = {
        ..._147
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._148
      };
    }
  }
}