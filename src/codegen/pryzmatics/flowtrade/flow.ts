import { Flow as Flow1 } from "../../refractedlabs/flowtrade/v1/flow";
import { FlowAmino as Flow1Amino } from "../../refractedlabs/flowtrade/v1/flow";
import { FlowSDKType as Flow1SDKType } from "../../refractedlabs/flowtrade/v1/flow";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Flow {
  flow: Flow1;
  nextPrice: string;
}
export interface FlowProtoMsg {
  typeUrl: "/pryzmatics.flowtrade.Flow";
  value: Uint8Array;
}
export interface FlowAmino {
  flow?: Flow1Amino;
  next_price?: string;
}
export interface FlowAminoMsg {
  type: "/pryzmatics.flowtrade.Flow";
  value: FlowAmino;
}
export interface FlowSDKType {
  flow: Flow1SDKType;
  next_price: string;
}
function createBaseFlow(): Flow {
  return {
    flow: Flow1.fromPartial({}),
    nextPrice: ""
  };
}
export const Flow = {
  typeUrl: "/pryzmatics.flowtrade.Flow",
  is(o: any): o is Flow {
    return o && (o.$typeUrl === Flow.typeUrl || Flow1.is(o.flow) && typeof o.nextPrice === "string");
  },
  isSDK(o: any): o is FlowSDKType {
    return o && (o.$typeUrl === Flow.typeUrl || Flow1.isSDK(o.flow) && typeof o.next_price === "string");
  },
  isAmino(o: any): o is FlowAmino {
    return o && (o.$typeUrl === Flow.typeUrl || Flow1.isAmino(o.flow) && typeof o.next_price === "string");
  },
  encode(message: Flow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow1.encode(message.flow, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.nextPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Flow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flow = Flow1.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.nextPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Flow {
    return {
      flow: isSet(object.flow) ? Flow1.fromJSON(object.flow) : undefined,
      nextPrice: isSet(object.nextPrice) ? String(object.nextPrice) : ""
    };
  },
  toJSON(message: Flow): unknown {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = message.flow ? Flow1.toJSON(message.flow) : undefined);
    message.nextPrice !== undefined && (obj.nextPrice = message.nextPrice);
    return obj;
  },
  fromPartial(object: Partial<Flow>): Flow {
    const message = createBaseFlow();
    message.flow = object.flow !== undefined && object.flow !== null ? Flow1.fromPartial(object.flow) : undefined;
    message.nextPrice = object.nextPrice ?? "";
    return message;
  },
  fromAmino(object: FlowAmino): Flow {
    const message = createBaseFlow();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow1.fromAmino(object.flow);
    }
    if (object.next_price !== undefined && object.next_price !== null) {
      message.nextPrice = object.next_price;
    }
    return message;
  },
  toAmino(message: Flow, useInterfaces: boolean = true): FlowAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow1.toAmino(message.flow, useInterfaces) : undefined;
    obj.next_price = padDecimal(message.nextPrice) === "" ? undefined : padDecimal(message.nextPrice);
    return obj;
  },
  fromAminoMsg(object: FlowAminoMsg): Flow {
    return Flow.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowProtoMsg, useInterfaces: boolean = true): Flow {
    return Flow.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Flow): Uint8Array {
    return Flow.encode(message).finish();
  },
  toProtoMsg(message: Flow): FlowProtoMsg {
    return {
      typeUrl: "/pryzmatics.flowtrade.Flow",
      value: Flow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Flow.typeUrl, Flow);