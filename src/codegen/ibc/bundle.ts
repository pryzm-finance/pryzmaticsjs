import * as _115 from "./applications/interchain_accounts/controller/v1/controller";
import * as _116 from "./applications/interchain_accounts/controller/v1/query";
import * as _117 from "./applications/interchain_accounts/controller/v1/tx";
import * as _118 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _119 from "./applications/interchain_accounts/host/v1/host";
import * as _120 from "./applications/interchain_accounts/host/v1/query";
import * as _121 from "./applications/interchain_accounts/v1/account";
import * as _122 from "./applications/interchain_accounts/v1/metadata";
import * as _123 from "./applications/interchain_accounts/v1/packet";
import * as _124 from "./applications/transfer/v1/authz";
import * as _125 from "./applications/transfer/v1/genesis";
import * as _126 from "./applications/transfer/v1/query";
import * as _127 from "./applications/transfer/v1/transfer";
import * as _128 from "./applications/transfer/v1/tx";
import * as _129 from "./applications/transfer/v2/packet";
import * as _130 from "./core/channel/v1/channel";
import * as _131 from "./core/channel/v1/genesis";
import * as _132 from "./core/channel/v1/query";
import * as _133 from "./core/channel/v1/tx";
import * as _134 from "./core/client/v1/client";
import * as _135 from "./core/client/v1/genesis";
import * as _136 from "./core/client/v1/query";
import * as _137 from "./core/client/v1/tx";
import * as _138 from "./core/commitment/v1/commitment";
import * as _139 from "./core/connection/v1/connection";
import * as _140 from "./core/connection/v1/genesis";
import * as _141 from "./core/connection/v1/query";
import * as _142 from "./core/connection/v1/tx";
import * as _143 from "./lightclients/localhost/v2/localhost";
import * as _144 from "./lightclients/solomachine/v2/solomachine";
import * as _145 from "./lightclients/solomachine/v3/solomachine";
import * as _146 from "./lightclients/tendermint/v1/tendermint";
import * as _345 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _346 from "./applications/transfer/v1/tx.amino";
import * as _347 from "./core/channel/v1/tx.amino";
import * as _348 from "./core/client/v1/tx.amino";
import * as _349 from "./core/connection/v1/tx.amino";
import * as _350 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _351 from "./applications/transfer/v1/tx.registry";
import * as _352 from "./core/channel/v1/tx.registry";
import * as _353 from "./core/client/v1/tx.registry";
import * as _354 from "./core/connection/v1/tx.registry";
import * as _355 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _356 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _357 from "./applications/transfer/v1/query.lcd";
import * as _358 from "./core/channel/v1/query.lcd";
import * as _359 from "./core/client/v1/query.lcd";
import * as _360 from "./core/connection/v1/query.lcd";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._115,
          ..._116,
          ..._117,
          ..._345,
          ..._350,
          ..._355
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._118
        };
      }
      export namespace host {
        export const v1 = {
          ..._119,
          ..._120,
          ..._356
        };
      }
      export const v1 = {
        ..._121,
        ..._122,
        ..._123
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._124,
        ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._346,
        ..._351,
        ..._357
      };
      export const v2 = {
        ..._129
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._347,
        ..._352,
        ..._358
      };
    }
    export namespace client {
      export const v1 = {
        ..._134,
        ..._135,
        ..._136,
        ..._137,
        ..._348,
        ..._353,
        ..._359
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._138
      };
    }
    export namespace connection {
      export const v1 = {
        ..._139,
        ..._140,
        ..._141,
        ..._142,
        ..._349,
        ..._354,
        ..._360
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._143
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._144
      };
      export const v3 = {
        ..._145
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._146
      };
    }
  }
}