import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum OrderBookOrderOrderByProperty {
  ORDER_BY_PROPERTY_ORDER_ID = 0,
  ORDER_BY_PROPERTY_ORDER_CREATION_TIME = 1,
  ORDER_BY_PROPERTY_ORDER_PRICE = 2,
  UNRECOGNIZED = -1,
}
export const OrderBookOrderOrderByPropertySDKType = OrderBookOrderOrderByProperty;
export const OrderBookOrderOrderByPropertyAmino = OrderBookOrderOrderByProperty;
export function orderBookOrderOrderByPropertyFromJSON(object: any): OrderBookOrderOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_ORDER_ID":
      return OrderBookOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_ID;
    case 1:
    case "ORDER_BY_PROPERTY_ORDER_CREATION_TIME":
      return OrderBookOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_CREATION_TIME;
    case 2:
    case "ORDER_BY_PROPERTY_ORDER_PRICE":
      return OrderBookOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_PRICE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBookOrderOrderByProperty.UNRECOGNIZED;
  }
}
export function orderBookOrderOrderByPropertyToJSON(object: OrderBookOrderOrderByProperty): string {
  switch (object) {
    case OrderBookOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_ID:
      return "ORDER_BY_PROPERTY_ORDER_ID";
    case OrderBookOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_CREATION_TIME:
      return "ORDER_BY_PROPERTY_ORDER_CREATION_TIME";
    case OrderBookOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_PRICE:
      return "ORDER_BY_PROPERTY_ORDER_PRICE";
    case OrderBookOrderOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum OrderBookOrderEventOrderByProperty {
  ORDER_BY_PROPERTY_ORDER_EVENT_ID = 0,
  ORDER_BY_PROPERTY_ORDER_EVENT_TIME = 1,
  UNRECOGNIZED = -1,
}
export const OrderBookOrderEventOrderByPropertySDKType = OrderBookOrderEventOrderByProperty;
export const OrderBookOrderEventOrderByPropertyAmino = OrderBookOrderEventOrderByProperty;
export function orderBookOrderEventOrderByPropertyFromJSON(object: any): OrderBookOrderEventOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_ORDER_EVENT_ID":
      return OrderBookOrderEventOrderByProperty.ORDER_BY_PROPERTY_ORDER_EVENT_ID;
    case 1:
    case "ORDER_BY_PROPERTY_ORDER_EVENT_TIME":
      return OrderBookOrderEventOrderByProperty.ORDER_BY_PROPERTY_ORDER_EVENT_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBookOrderEventOrderByProperty.UNRECOGNIZED;
  }
}
export function orderBookOrderEventOrderByPropertyToJSON(object: OrderBookOrderEventOrderByProperty): string {
  switch (object) {
    case OrderBookOrderEventOrderByProperty.ORDER_BY_PROPERTY_ORDER_EVENT_ID:
      return "ORDER_BY_PROPERTY_ORDER_EVENT_ID";
    case OrderBookOrderEventOrderByProperty.ORDER_BY_PROPERTY_ORDER_EVENT_TIME:
      return "ORDER_BY_PROPERTY_ORDER_EVENT_TIME";
    case OrderBookOrderEventOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface OrderBookOrderOrderBy {
  property: OrderBookOrderOrderByProperty;
  descending: boolean;
}
export interface OrderBookOrderOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.orderbook.OrderBookOrderOrderBy";
  value: Uint8Array;
}
export interface OrderBookOrderOrderByAmino {
  property?: OrderBookOrderOrderByProperty;
  descending?: boolean;
}
export interface OrderBookOrderOrderByAminoMsg {
  type: "/pryzmatics.database.orderbook.OrderBookOrderOrderBy";
  value: OrderBookOrderOrderByAmino;
}
export interface OrderBookOrderOrderBySDKType {
  property: OrderBookOrderOrderByProperty;
  descending: boolean;
}
export interface OrderBookOrderEventOrderBy {
  property: OrderBookOrderEventOrderByProperty;
  descending: boolean;
}
export interface OrderBookOrderEventOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.orderbook.OrderBookOrderEventOrderBy";
  value: Uint8Array;
}
export interface OrderBookOrderEventOrderByAmino {
  property?: OrderBookOrderEventOrderByProperty;
  descending?: boolean;
}
export interface OrderBookOrderEventOrderByAminoMsg {
  type: "/pryzmatics.database.orderbook.OrderBookOrderEventOrderBy";
  value: OrderBookOrderEventOrderByAmino;
}
export interface OrderBookOrderEventOrderBySDKType {
  property: OrderBookOrderEventOrderByProperty;
  descending: boolean;
}
function createBaseOrderBookOrderOrderBy(): OrderBookOrderOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const OrderBookOrderOrderBy = {
  typeUrl: "/pryzmatics.database.orderbook.OrderBookOrderOrderBy",
  is(o: any): o is OrderBookOrderOrderBy {
    return o && (o.$typeUrl === OrderBookOrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is OrderBookOrderOrderBySDKType {
    return o && (o.$typeUrl === OrderBookOrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is OrderBookOrderOrderByAmino {
    return o && (o.$typeUrl === OrderBookOrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: OrderBookOrderOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderBookOrderOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookOrderOrderBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = (reader.int32() as any);
          break;
        case 2:
          message.descending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderBookOrderOrderBy {
    return {
      property: isSet(object.property) ? orderBookOrderOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: OrderBookOrderOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = orderBookOrderOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<OrderBookOrderOrderBy>): OrderBookOrderOrderBy {
    const message = createBaseOrderBookOrderOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: OrderBookOrderOrderByAmino): OrderBookOrderOrderBy {
    const message = createBaseOrderBookOrderOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: OrderBookOrderOrderBy, useInterfaces: boolean = true): OrderBookOrderOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: OrderBookOrderOrderByAminoMsg): OrderBookOrderOrderBy {
    return OrderBookOrderOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderBookOrderOrderByProtoMsg, useInterfaces: boolean = true): OrderBookOrderOrderBy {
    return OrderBookOrderOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderBookOrderOrderBy): Uint8Array {
    return OrderBookOrderOrderBy.encode(message).finish();
  },
  toProtoMsg(message: OrderBookOrderOrderBy): OrderBookOrderOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.orderbook.OrderBookOrderOrderBy",
      value: OrderBookOrderOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderBookOrderOrderBy.typeUrl, OrderBookOrderOrderBy);
function createBaseOrderBookOrderEventOrderBy(): OrderBookOrderEventOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const OrderBookOrderEventOrderBy = {
  typeUrl: "/pryzmatics.database.orderbook.OrderBookOrderEventOrderBy",
  is(o: any): o is OrderBookOrderEventOrderBy {
    return o && (o.$typeUrl === OrderBookOrderEventOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is OrderBookOrderEventOrderBySDKType {
    return o && (o.$typeUrl === OrderBookOrderEventOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is OrderBookOrderEventOrderByAmino {
    return o && (o.$typeUrl === OrderBookOrderEventOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: OrderBookOrderEventOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderBookOrderEventOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookOrderEventOrderBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = (reader.int32() as any);
          break;
        case 2:
          message.descending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderBookOrderEventOrderBy {
    return {
      property: isSet(object.property) ? orderBookOrderEventOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: OrderBookOrderEventOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = orderBookOrderEventOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<OrderBookOrderEventOrderBy>): OrderBookOrderEventOrderBy {
    const message = createBaseOrderBookOrderEventOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: OrderBookOrderEventOrderByAmino): OrderBookOrderEventOrderBy {
    const message = createBaseOrderBookOrderEventOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: OrderBookOrderEventOrderBy, useInterfaces: boolean = true): OrderBookOrderEventOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: OrderBookOrderEventOrderByAminoMsg): OrderBookOrderEventOrderBy {
    return OrderBookOrderEventOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderBookOrderEventOrderByProtoMsg, useInterfaces: boolean = true): OrderBookOrderEventOrderBy {
    return OrderBookOrderEventOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderBookOrderEventOrderBy): Uint8Array {
    return OrderBookOrderEventOrderBy.encode(message).finish();
  },
  toProtoMsg(message: OrderBookOrderEventOrderBy): OrderBookOrderEventOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.orderbook.OrderBookOrderEventOrderBy",
      value: OrderBookOrderEventOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderBookOrderEventOrderBy.typeUrl, OrderBookOrderEventOrderBy);