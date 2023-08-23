
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model WeatherData
 * 
 */
export type WeatherData = $Result.DefaultSelection<Prisma.$WeatherDataPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stations
 * const stations = await prisma.station.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Stations
   * const stations = await prisma.station.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs>;

  /**
   * `prisma.weatherData`: Exposes CRUD operations for the **WeatherData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeatherData
    * const weatherData = await prisma.weatherData.findMany()
    * ```
    */
  get weatherData(): Prisma.WeatherDataDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Station: 'Station',
    WeatherData: 'WeatherData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'station' | 'weatherData'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>,
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      WeatherData: {
        payload: Prisma.$WeatherDataPayload<ExtArgs>
        fields: Prisma.WeatherDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          findFirst: {
            args: Prisma.WeatherDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          findMany: {
            args: Prisma.WeatherDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>[]
          }
          create: {
            args: Prisma.WeatherDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          createMany: {
            args: Prisma.WeatherDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WeatherDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          update: {
            args: Prisma.WeatherDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          deleteMany: {
            args: Prisma.WeatherDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WeatherDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          aggregate: {
            args: Prisma.WeatherDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWeatherData>
          }
          groupBy: {
            args: Prisma.WeatherDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WeatherDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherDataCountArgs<ExtArgs>,
            result: $Utils.Optional<WeatherDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
    bikesAvailable: number | null
    docksAvailable: number | null
    totalDocks: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
    bikesAvailable: number | null
    docksAvailable: number | null
    totalDocks: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    kioskId: string | null
    bikesAvailable: number | null
    docksAvailable: number | null
    totalDocks: number | null
    timestamp: Date | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    kioskId: string | null
    bikesAvailable: number | null
    docksAvailable: number | null
    totalDocks: number | null
    timestamp: Date | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    kioskId: number
    bikesAvailable: number
    docksAvailable: number
    totalDocks: number
    timestamp: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
    bikesAvailable?: true
    docksAvailable?: true
    totalDocks?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
    bikesAvailable?: true
    docksAvailable?: true
    totalDocks?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    kioskId?: true
    bikesAvailable?: true
    docksAvailable?: true
    totalDocks?: true
    timestamp?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    kioskId?: true
    bikesAvailable?: true
    docksAvailable?: true
    totalDocks?: true
    timestamp?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    kioskId?: true
    bikesAvailable?: true
    docksAvailable?: true
    totalDocks?: true
    timestamp?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    kioskId: string
    bikesAvailable: number
    docksAvailable: number
    totalDocks: number
    timestamp: Date
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kioskId?: boolean
    bikesAvailable?: boolean
    docksAvailable?: boolean
    totalDocks?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["station"]>

  export type StationSelectScalar = {
    id?: boolean
    kioskId?: boolean
    bikesAvailable?: boolean
    docksAvailable?: boolean
    totalDocks?: boolean
    timestamp?: boolean
  }


  export type $StationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      kioskId: string
      bikesAvailable: number
      docksAvailable: number
      totalDocks: number
      timestamp: Date
    }, ExtArgs["result"]["station"]>
    composites: {}
  }


  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StationFindManyArgs, 'select' | 'include'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Station that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
    **/
    create<T extends StationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StationCreateArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stations.
     *     @param {StationCreateManyArgs} args - Arguments to create many Stations.
     *     @example
     *     // Create many Stations
     *     const station = await prisma.station.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
    **/
    delete<T extends StationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StationDeleteArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpdateArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
    **/
    upsert<T extends StationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpsertArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Station model
   */ 
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'Int'>
    readonly kioskId: FieldRef<"Station", 'String'>
    readonly bikesAvailable: FieldRef<"Station", 'Int'>
    readonly docksAvailable: FieldRef<"Station", 'Int'>
    readonly totalDocks: FieldRef<"Station", 'Int'>
    readonly timestamp: FieldRef<"Station", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }


  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
  }


  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }


  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
  }


  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
  }



  /**
   * Model WeatherData
   */

  export type AggregateWeatherData = {
    _count: WeatherDataCountAggregateOutputType | null
    _avg: WeatherDataAvgAggregateOutputType | null
    _sum: WeatherDataSumAggregateOutputType | null
    _min: WeatherDataMinAggregateOutputType | null
    _max: WeatherDataMaxAggregateOutputType | null
  }

  export type WeatherDataAvgAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
  }

  export type WeatherDataSumAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
  }

  export type WeatherDataMinAggregateOutputType = {
    id: number | null
    city: string | null
    temperature: number | null
    humidity: number | null
    description: string | null
    timestamp: Date | null
  }

  export type WeatherDataMaxAggregateOutputType = {
    id: number | null
    city: string | null
    temperature: number | null
    humidity: number | null
    description: string | null
    timestamp: Date | null
  }

  export type WeatherDataCountAggregateOutputType = {
    id: number
    city: number
    temperature: number
    humidity: number
    description: number
    timestamp: number
    _all: number
  }


  export type WeatherDataAvgAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
  }

  export type WeatherDataSumAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
  }

  export type WeatherDataMinAggregateInputType = {
    id?: true
    city?: true
    temperature?: true
    humidity?: true
    description?: true
    timestamp?: true
  }

  export type WeatherDataMaxAggregateInputType = {
    id?: true
    city?: true
    temperature?: true
    humidity?: true
    description?: true
    timestamp?: true
  }

  export type WeatherDataCountAggregateInputType = {
    id?: true
    city?: true
    temperature?: true
    humidity?: true
    description?: true
    timestamp?: true
    _all?: true
  }

  export type WeatherDataAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherData to aggregate.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeatherData
    **/
    _count?: true | WeatherDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherDataMaxAggregateInputType
  }

  export type GetWeatherDataAggregateType<T extends WeatherDataAggregateArgs> = {
        [P in keyof T & keyof AggregateWeatherData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeatherData[P]>
      : GetScalarType<T[P], AggregateWeatherData[P]>
  }




  export type WeatherDataGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WeatherDataWhereInput
    orderBy?: WeatherDataOrderByWithAggregationInput | WeatherDataOrderByWithAggregationInput[]
    by: WeatherDataScalarFieldEnum[] | WeatherDataScalarFieldEnum
    having?: WeatherDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherDataCountAggregateInputType | true
    _avg?: WeatherDataAvgAggregateInputType
    _sum?: WeatherDataSumAggregateInputType
    _min?: WeatherDataMinAggregateInputType
    _max?: WeatherDataMaxAggregateInputType
  }

  export type WeatherDataGroupByOutputType = {
    id: number
    city: string
    temperature: number
    humidity: number
    description: string
    timestamp: Date
    _count: WeatherDataCountAggregateOutputType | null
    _avg: WeatherDataAvgAggregateOutputType | null
    _sum: WeatherDataSumAggregateOutputType | null
    _min: WeatherDataMinAggregateOutputType | null
    _max: WeatherDataMaxAggregateOutputType | null
  }

  type GetWeatherDataGroupByPayload<T extends WeatherDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherDataGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherDataGroupByOutputType[P]>
        }
      >
    >


  export type WeatherDataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    temperature?: boolean
    humidity?: boolean
    description?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["weatherData"]>

  export type WeatherDataSelectScalar = {
    id?: boolean
    city?: boolean
    temperature?: boolean
    humidity?: boolean
    description?: boolean
    timestamp?: boolean
  }


  export type $WeatherDataPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "WeatherData"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      city: string
      temperature: number
      humidity: number
      description: string
      timestamp: Date
    }, ExtArgs["result"]["weatherData"]>
    composites: {}
  }


  type WeatherDataGetPayload<S extends boolean | null | undefined | WeatherDataDefaultArgs> = $Result.GetResult<Prisma.$WeatherDataPayload, S>

  type WeatherDataCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<WeatherDataFindManyArgs, 'select' | 'include'> & {
      select?: WeatherDataCountAggregateInputType | true
    }

  export interface WeatherDataDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeatherData'], meta: { name: 'WeatherData' } }
    /**
     * Find zero or one WeatherData that matches the filter.
     * @param {WeatherDataFindUniqueArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WeatherDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WeatherDataFindUniqueArgs<ExtArgs>>
    ): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WeatherData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WeatherDataFindUniqueOrThrowArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WeatherDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeatherDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WeatherData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindFirstArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WeatherDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WeatherDataFindFirstArgs<ExtArgs>>
    ): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WeatherData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindFirstOrThrowArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WeatherDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeatherDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WeatherData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeatherData
     * const weatherData = await prisma.weatherData.findMany()
     * 
     * // Get first 10 WeatherData
     * const weatherData = await prisma.weatherData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherDataWithIdOnly = await prisma.weatherData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WeatherDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeatherDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WeatherData.
     * @param {WeatherDataCreateArgs} args - Arguments to create a WeatherData.
     * @example
     * // Create one WeatherData
     * const WeatherData = await prisma.weatherData.create({
     *   data: {
     *     // ... data to create a WeatherData
     *   }
     * })
     * 
    **/
    create<T extends WeatherDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WeatherDataCreateArgs<ExtArgs>>
    ): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WeatherData.
     *     @param {WeatherDataCreateManyArgs} args - Arguments to create many WeatherData.
     *     @example
     *     // Create many WeatherData
     *     const weatherData = await prisma.weatherData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WeatherDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeatherDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WeatherData.
     * @param {WeatherDataDeleteArgs} args - Arguments to delete one WeatherData.
     * @example
     * // Delete one WeatherData
     * const WeatherData = await prisma.weatherData.delete({
     *   where: {
     *     // ... filter to delete one WeatherData
     *   }
     * })
     * 
    **/
    delete<T extends WeatherDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WeatherDataDeleteArgs<ExtArgs>>
    ): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WeatherData.
     * @param {WeatherDataUpdateArgs} args - Arguments to update one WeatherData.
     * @example
     * // Update one WeatherData
     * const weatherData = await prisma.weatherData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WeatherDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WeatherDataUpdateArgs<ExtArgs>>
    ): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WeatherData.
     * @param {WeatherDataDeleteManyArgs} args - Arguments to filter WeatherData to delete.
     * @example
     * // Delete a few WeatherData
     * const { count } = await prisma.weatherData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WeatherDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeatherDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeatherData
     * const weatherData = await prisma.weatherData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WeatherDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WeatherDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeatherData.
     * @param {WeatherDataUpsertArgs} args - Arguments to update or create a WeatherData.
     * @example
     * // Update or create a WeatherData
     * const weatherData = await prisma.weatherData.upsert({
     *   create: {
     *     // ... data to create a WeatherData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeatherData we want to update
     *   }
     * })
    **/
    upsert<T extends WeatherDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WeatherDataUpsertArgs<ExtArgs>>
    ): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataCountArgs} args - Arguments to filter WeatherData to count.
     * @example
     * // Count the number of WeatherData
     * const count = await prisma.weatherData.count({
     *   where: {
     *     // ... the filter for the WeatherData we want to count
     *   }
     * })
    **/
    count<T extends WeatherDataCountArgs>(
      args?: Subset<T, WeatherDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeatherDataAggregateArgs>(args: Subset<T, WeatherDataAggregateArgs>): Prisma.PrismaPromise<GetWeatherDataAggregateType<T>>

    /**
     * Group by WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeatherDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherDataGroupByArgs['orderBy'] }
        : { orderBy?: WeatherDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeatherDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeatherData model
   */
  readonly fields: WeatherDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeatherData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherDataClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WeatherData model
   */ 
  interface WeatherDataFieldRefs {
    readonly id: FieldRef<"WeatherData", 'Int'>
    readonly city: FieldRef<"WeatherData", 'String'>
    readonly temperature: FieldRef<"WeatherData", 'Float'>
    readonly humidity: FieldRef<"WeatherData", 'Float'>
    readonly description: FieldRef<"WeatherData", 'String'>
    readonly timestamp: FieldRef<"WeatherData", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * WeatherData findUnique
   */
  export type WeatherDataFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where: WeatherDataWhereUniqueInput
  }


  /**
   * WeatherData findUniqueOrThrow
   */
  export type WeatherDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where: WeatherDataWhereUniqueInput
  }


  /**
   * WeatherData findFirst
   */
  export type WeatherDataFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherData.
     */
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }


  /**
   * WeatherData findFirstOrThrow
   */
  export type WeatherDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherData.
     */
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }


  /**
   * WeatherData findMany
   */
  export type WeatherDataFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }


  /**
   * WeatherData create
   */
  export type WeatherDataCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * The data needed to create a WeatherData.
     */
    data: XOR<WeatherDataCreateInput, WeatherDataUncheckedCreateInput>
  }


  /**
   * WeatherData createMany
   */
  export type WeatherDataCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeatherData.
     */
    data: WeatherDataCreateManyInput | WeatherDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WeatherData update
   */
  export type WeatherDataUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * The data needed to update a WeatherData.
     */
    data: XOR<WeatherDataUpdateInput, WeatherDataUncheckedUpdateInput>
    /**
     * Choose, which WeatherData to update.
     */
    where: WeatherDataWhereUniqueInput
  }


  /**
   * WeatherData updateMany
   */
  export type WeatherDataUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeatherData.
     */
    data: XOR<WeatherDataUpdateManyMutationInput, WeatherDataUncheckedUpdateManyInput>
    /**
     * Filter which WeatherData to update
     */
    where?: WeatherDataWhereInput
  }


  /**
   * WeatherData upsert
   */
  export type WeatherDataUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * The filter to search for the WeatherData to update in case it exists.
     */
    where: WeatherDataWhereUniqueInput
    /**
     * In case the WeatherData found by the `where` argument doesn't exist, create a new WeatherData with this data.
     */
    create: XOR<WeatherDataCreateInput, WeatherDataUncheckedCreateInput>
    /**
     * In case the WeatherData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherDataUpdateInput, WeatherDataUncheckedUpdateInput>
  }


  /**
   * WeatherData delete
   */
  export type WeatherDataDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Filter which WeatherData to delete.
     */
    where: WeatherDataWhereUniqueInput
  }


  /**
   * WeatherData deleteMany
   */
  export type WeatherDataDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherData to delete
     */
    where?: WeatherDataWhereInput
  }


  /**
   * WeatherData without action
   */
  export type WeatherDataDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StationScalarFieldEnum: {
    id: 'id',
    kioskId: 'kioskId',
    bikesAvailable: 'bikesAvailable',
    docksAvailable: 'docksAvailable',
    totalDocks: 'totalDocks',
    timestamp: 'timestamp'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const WeatherDataScalarFieldEnum: {
    id: 'id',
    city: 'city',
    temperature: 'temperature',
    humidity: 'humidity',
    description: 'description',
    timestamp: 'timestamp'
  };

  export type WeatherDataScalarFieldEnum = (typeof WeatherDataScalarFieldEnum)[keyof typeof WeatherDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: IntFilter<"Station"> | number
    kioskId?: StringFilter<"Station"> | string
    bikesAvailable?: IntFilter<"Station"> | number
    docksAvailable?: IntFilter<"Station"> | number
    totalDocks?: IntFilter<"Station"> | number
    timestamp?: DateTimeFilter<"Station"> | Date | string
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    kioskId?: SortOrder
    bikesAvailable?: SortOrder
    docksAvailable?: SortOrder
    totalDocks?: SortOrder
    timestamp?: SortOrder
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kioskId?: string
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    bikesAvailable?: IntFilter<"Station"> | number
    docksAvailable?: IntFilter<"Station"> | number
    totalDocks?: IntFilter<"Station"> | number
    timestamp?: DateTimeFilter<"Station"> | Date | string
  }, "id" | "kioskId">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    kioskId?: SortOrder
    bikesAvailable?: SortOrder
    docksAvailable?: SortOrder
    totalDocks?: SortOrder
    timestamp?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _avg?: StationAvgOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
    _sum?: StationSumOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Station"> | number
    kioskId?: StringWithAggregatesFilter<"Station"> | string
    bikesAvailable?: IntWithAggregatesFilter<"Station"> | number
    docksAvailable?: IntWithAggregatesFilter<"Station"> | number
    totalDocks?: IntWithAggregatesFilter<"Station"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Station"> | Date | string
  }

  export type WeatherDataWhereInput = {
    AND?: WeatherDataWhereInput | WeatherDataWhereInput[]
    OR?: WeatherDataWhereInput[]
    NOT?: WeatherDataWhereInput | WeatherDataWhereInput[]
    id?: IntFilter<"WeatherData"> | number
    city?: StringFilter<"WeatherData"> | string
    temperature?: FloatFilter<"WeatherData"> | number
    humidity?: FloatFilter<"WeatherData"> | number
    description?: StringFilter<"WeatherData"> | string
    timestamp?: DateTimeFilter<"WeatherData"> | Date | string
  }

  export type WeatherDataOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
  }

  export type WeatherDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeatherDataWhereInput | WeatherDataWhereInput[]
    OR?: WeatherDataWhereInput[]
    NOT?: WeatherDataWhereInput | WeatherDataWhereInput[]
    city?: StringFilter<"WeatherData"> | string
    temperature?: FloatFilter<"WeatherData"> | number
    humidity?: FloatFilter<"WeatherData"> | number
    description?: StringFilter<"WeatherData"> | string
    timestamp?: DateTimeFilter<"WeatherData"> | Date | string
  }, "id">

  export type WeatherDataOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    _count?: WeatherDataCountOrderByAggregateInput
    _avg?: WeatherDataAvgOrderByAggregateInput
    _max?: WeatherDataMaxOrderByAggregateInput
    _min?: WeatherDataMinOrderByAggregateInput
    _sum?: WeatherDataSumOrderByAggregateInput
  }

  export type WeatherDataScalarWhereWithAggregatesInput = {
    AND?: WeatherDataScalarWhereWithAggregatesInput | WeatherDataScalarWhereWithAggregatesInput[]
    OR?: WeatherDataScalarWhereWithAggregatesInput[]
    NOT?: WeatherDataScalarWhereWithAggregatesInput | WeatherDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeatherData"> | number
    city?: StringWithAggregatesFilter<"WeatherData"> | string
    temperature?: FloatWithAggregatesFilter<"WeatherData"> | number
    humidity?: FloatWithAggregatesFilter<"WeatherData"> | number
    description?: StringWithAggregatesFilter<"WeatherData"> | string
    timestamp?: DateTimeWithAggregatesFilter<"WeatherData"> | Date | string
  }

  export type StationCreateInput = {
    kioskId: string
    bikesAvailable: number
    docksAvailable: number
    totalDocks: number
    timestamp?: Date | string
  }

  export type StationUncheckedCreateInput = {
    id?: number
    kioskId: string
    bikesAvailable: number
    docksAvailable: number
    totalDocks: number
    timestamp?: Date | string
  }

  export type StationUpdateInput = {
    kioskId?: StringFieldUpdateOperationsInput | string
    bikesAvailable?: IntFieldUpdateOperationsInput | number
    docksAvailable?: IntFieldUpdateOperationsInput | number
    totalDocks?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kioskId?: StringFieldUpdateOperationsInput | string
    bikesAvailable?: IntFieldUpdateOperationsInput | number
    docksAvailable?: IntFieldUpdateOperationsInput | number
    totalDocks?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationCreateManyInput = {
    id?: number
    kioskId: string
    bikesAvailable: number
    docksAvailable: number
    totalDocks: number
    timestamp?: Date | string
  }

  export type StationUpdateManyMutationInput = {
    kioskId?: StringFieldUpdateOperationsInput | string
    bikesAvailable?: IntFieldUpdateOperationsInput | number
    docksAvailable?: IntFieldUpdateOperationsInput | number
    totalDocks?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kioskId?: StringFieldUpdateOperationsInput | string
    bikesAvailable?: IntFieldUpdateOperationsInput | number
    docksAvailable?: IntFieldUpdateOperationsInput | number
    totalDocks?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataCreateInput = {
    city: string
    temperature: number
    humidity: number
    description: string
    timestamp?: Date | string
  }

  export type WeatherDataUncheckedCreateInput = {
    id?: number
    city: string
    temperature: number
    humidity: number
    description: string
    timestamp?: Date | string
  }

  export type WeatherDataUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataCreateManyInput = {
    id?: number
    city: string
    temperature: number
    humidity: number
    description: string
    timestamp?: Date | string
  }

  export type WeatherDataUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    kioskId?: SortOrder
    bikesAvailable?: SortOrder
    docksAvailable?: SortOrder
    totalDocks?: SortOrder
    timestamp?: SortOrder
  }

  export type StationAvgOrderByAggregateInput = {
    id?: SortOrder
    bikesAvailable?: SortOrder
    docksAvailable?: SortOrder
    totalDocks?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    kioskId?: SortOrder
    bikesAvailable?: SortOrder
    docksAvailable?: SortOrder
    totalDocks?: SortOrder
    timestamp?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    kioskId?: SortOrder
    bikesAvailable?: SortOrder
    docksAvailable?: SortOrder
    totalDocks?: SortOrder
    timestamp?: SortOrder
  }

  export type StationSumOrderByAggregateInput = {
    id?: SortOrder
    bikesAvailable?: SortOrder
    docksAvailable?: SortOrder
    totalDocks?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WeatherDataCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
  }

  export type WeatherDataAvgOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
  }

  export type WeatherDataMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
  }

  export type WeatherDataMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
  }

  export type WeatherDataSumOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StationDefaultArgs instead
     */
    export type StationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = StationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeatherDataDefaultArgs instead
     */
    export type WeatherDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = WeatherDataDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}