# mugundhan-googlemap

Capacitor Google Map for Android and Ios

## Install

```bash
npm install mugundhan-googlemap
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`create(...)`](#create)
* [`initialize(...)`](#initialize)
* [`addMarker(...)`](#addmarker)
* [`setCamera(...)`](#setcamera)
* [`setMapType(...)`](#setmaptype)
* [`setIndoorEnabled(...)`](#setindoorenabled)
* [`setTrafficEnabled(...)`](#settrafficenabled)
* [`accessibilityElementsHidden(...)`](#accessibilityelementshidden)
* [`padding(...)`](#padding)
* [`clear()`](#clear)
* [`close()`](#close)
* [`hide()`](#hide)
* [`show()`](#show)
* [`settings(...)`](#settings)
* [`reverseGeocodeCoordinate(...)`](#reversegeocodecoordinate)
* [`enableCurrentLocation(...)`](#enablecurrentlocation)
* [`myLocation(...)`](#mylocation)
* [`viewBounds()`](#viewbounds)
* [`setMapStyle(...)`](#setmapstyle)
* [`addPolyline(...)`](#addpolyline)
* [`addCircle(...)`](#addcircle)
* [`addPolygon(...)`](#addpolygon)
* [`setOnMarkerClickListener()`](#setonmarkerclicklistener)
* [`setOnMapClickListener()`](#setonmapclicklistener)
* [`setOnPoiClickListener()`](#setonpoiclicklistener)
* [`requestLocationPermission()`](#requestlocationpermission)
* [`setOnMyLocationClickListener()`](#setonmylocationclicklistener)
* [`setOnMyLocationButtonClickListener()`](#setonmylocationbuttonclicklistener)
* [`addListener('didTap', ...)`](#addlistenerdidtap)
* [`addListener('dragEnded', ...)`](#addlistenerdragended)
* [`addListener('didTapAt', ...)`](#addlistenerdidtapat)
* [`addListener('didTapPOIWithPlaceID', ...)`](#addlistenerdidtappoiwithplaceid)
* [`addListener('didChange', ...)`](#addlistenerdidchange)
* [`addListener('onMapReady', ...)`](#addlisteneronmapready)
* [`addListener(string, ...)`](#addlistenerstring)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


### create(...)

```typescript
create(options: { width: number; height: number; x: number; y: number; latitude?: number; longitude?: number; zoom?: number; liteMode?: boolean; }) => any
```

| Param         | Type                                                                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ width: number; height: number; x: number; y: number; latitude?: number; longitude?: number; zoom?: number; liteMode?: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### initialize(...)

```typescript
initialize(options: { key: string; }) => any
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>any</code>

--------------------


### addMarker(...)

```typescript
addMarker(options: { latitude: number; longitude: number; opacity?: number; title?: string; snippet?: string; isFlat?: boolean; url?: string; rotation?: number; key?: string; }) => any
```

Adds a marker on the map

| Param         | Type                                                                                                                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ latitude: number; longitude: number; opacity?: number; title?: string; snippet?: string; isFlat?: boolean; url?: string; rotation?: number; key?: string; }</code> |

**Returns:** <code>any</code>

--------------------


### setCamera(...)

```typescript
setCamera(options: { viewingAngle?: number; bearing?: number; zoom?: number; latitude?: number; longitude?: number; animate?: boolean; animationDuration?: number; coordinates?: LatLng[]; }) => any
```

Repositions the camera

| Param         | Type                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ viewingAngle?: number; bearing?: number; zoom?: number; latitude?: number; longitude?: number; animate?: boolean; animationDuration?: number; coordinates?: {}; }</code> |

**Returns:** <code>any</code>

--------------------


### setMapType(...)

```typescript
setMapType(options: { type: string; }) => any
```

Sets the map type

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ type: string; }</code> |

**Returns:** <code>any</code>

--------------------


### setIndoorEnabled(...)

```typescript
setIndoorEnabled(options: { enabled: boolean; }) => any
```

Allows indoor maps to be enabled or disabled

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### setTrafficEnabled(...)

```typescript
setTrafficEnabled(options: { enabled: boolean; }) => any
```

Allows traffic information to be enabled or disabled

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### accessibilityElementsHidden(...)

```typescript
accessibilityElementsHidden(options: { hidden: boolean; }) => any
```

[iOS Only] To hide accessiblity elements

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ hidden: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### padding(...)

```typescript
padding(options: { top: number; left: number; right: number; bottom: number; }) => any
```

Adds padding around the map

| Param         | Type                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| **`options`** | <code>{ top: number; left: number; right: number; bottom: number; }</code> |

**Returns:** <code>any</code>

--------------------


### clear()

```typescript
clear() => any
```

Clear any views like Marker, Shapes from the map

**Returns:** <code>any</code>

--------------------


### close()

```typescript
close() => any
```

Destroy the mapView, use in ionViewDidLeave and similar

**Returns:** <code>any</code>

--------------------


### hide()

```typescript
hide() => any
```

Hide the mapView, use when preventing any overlapping on other views

**Returns:** <code>any</code>

--------------------


### show()

```typescript
show() => any
```

Show the hidden mapView

**Returns:** <code>any</code>

--------------------


### settings(...)

```typescript
settings(options: { allowScrollGesturesDuringRotateOrZoom?: boolean; compassButton?: boolean; consumesGesturesInView?: boolean; indoorPicker?: boolean; myLocationButton?: boolean; rotateGestures?: boolean; scrollGestures?: boolean; tiltGestures?: boolean; zoomGestures?: boolean; }) => any
```

Map UI Settings

| Param         | Type                                                                                                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ allowScrollGesturesDuringRotateOrZoom?: boolean; compassButton?: boolean; consumesGesturesInView?: boolean; indoorPicker?: boolean; myLocationButton?: boolean; rotateGestures?: boolean; scrollGestures?: boolean; tiltGestures?: boolean; zoomGestures?: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### reverseGeocodeCoordinate(...)

```typescript
reverseGeocodeCoordinate(options: { latitude: number; longitude: number; }) => any
```

Get Google Map address for a set of lat lng

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ latitude: number; longitude: number; }</code> |

**Returns:** <code>any</code>

--------------------


### enableCurrentLocation(...)

```typescript
enableCurrentLocation(options: { enabled: boolean; }) => any
```

Enable user's current location

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>any</code>

--------------------


### myLocation(...)

```typescript
myLocation(options: any) => any
```

Get user location

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>any</code>

--------------------


### viewBounds()

```typescript
viewBounds() => any
```

Get view bounds in latlng. This polygon can be a trapezoid instead of a rectangle,
because a camera can have tilt. If the camera is directly over the center of the
camera, the shape is rectangular, but if the camera is tilted, the shape will
appear to be a trapezoid whose smallest side is closest to the point of view.

**Returns:** <code>any</code>

--------------------


### setMapStyle(...)

```typescript
setMapStyle(options: { jsonString: string; }) => any
```

Add styles to map with a style JSON string format specific by Google

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ jsonString: string; }</code> |

**Returns:** <code>any</code>

--------------------


### addPolyline(...)

```typescript
addPolyline(options: PolylineOptions) => any
```

Shapes

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#polylineoptions">PolylineOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### addCircle(...)

```typescript
addCircle(options: CircleOptions) => any
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#circleoptions">CircleOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### addPolygon(...)

```typescript
addPolygon(options: PolygonOptions) => any
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#polygonoptions">PolygonOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### setOnMarkerClickListener()

```typescript
setOnMarkerClickListener() => any
```

Map click listeners

**Returns:** <code>any</code>

--------------------


### setOnMapClickListener()

```typescript
setOnMapClickListener() => any
```

**Returns:** <code>any</code>

--------------------


### setOnPoiClickListener()

```typescript
setOnPoiClickListener() => any
```

**Returns:** <code>any</code>

--------------------


### requestLocationPermission()

```typescript
requestLocationPermission() => any
```

**Returns:** <code>any</code>

--------------------


### setOnMyLocationClickListener()

```typescript
setOnMyLocationClickListener() => any
```

**Returns:** <code>any</code>

--------------------


### setOnMyLocationButtonClickListener()

```typescript
setOnMyLocationButtonClickListener() => any
```

**Returns:** <code>any</code>

--------------------


### addListener('didTap', ...)

```typescript
addListener(eventName: 'didTap', listenerFunc: (results: any) => void) => PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'didTap'</code>                  |
| **`listenerFunc`** | <code>(results: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('dragEnded', ...)

```typescript
addListener(eventName: 'dragEnded', listenerFunc: (results: any) => void) => PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'dragEnded'</code>               |
| **`listenerFunc`** | <code>(results: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('didTapAt', ...)

```typescript
addListener(eventName: 'didTapAt', listenerFunc: (results: any) => void) => PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'didTapAt'</code>                |
| **`listenerFunc`** | <code>(results: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('didTapPOIWithPlaceID', ...)

```typescript
addListener(eventName: 'didTapPOIWithPlaceID', listenerFunc: (results: any) => void) => PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'didTapPOIWithPlaceID'</code>    |
| **`listenerFunc`** | <code>(results: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('didChange', ...)

```typescript
addListener(eventName: 'didChange', listenerFunc: (results: any) => void) => PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'didChange'</code>               |
| **`listenerFunc`** | <code>(results: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onMapReady', ...)

```typescript
addListener(eventName: 'onMapReady', listenerFunc: (results: any) => void) => PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'onMapReady'</code>              |
| **`listenerFunc`** | <code>(results: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener(string, ...)

```typescript
addListener(eventName: string, listenerFunc: (...args: any[]) => any) => any
```

| Param              | Type                                 |
| ------------------ | ------------------------------------ |
| **`eventName`**    | <code>string</code>                  |
| **`listenerFunc`** | <code>(...args: {}) =&gt; any</code> |

**Returns:** <code>any</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => any
```

**Returns:** <code>any</code>

--------------------


### Interfaces


#### LatLng

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |


#### PolylineOptions

| Prop             | Type                                      |
| ---------------- | ----------------------------------------- |
| **`id`**         | <code><a href="#viewid">ViewID</a></code> |
| **`points`**     | <code>{}</code>                           |
| **`tag`**        | <code>any</code>                          |
| **`color`**      | <code>string</code>                       |
| **`width`**      | <code>number</code>                       |
| **`zIndex`**     | <code>number</code>                       |
| **`visibility`** | <code>boolean</code>                      |


#### ViewID

| Prop            | Type                |
| --------------- | ------------------- |
| **`androidID`** | <code>number</code> |
| **`iOSID`**     | <code>number</code> |


#### CircleOptions

| Prop              | Type                                      |
| ----------------- | ----------------------------------------- |
| **`id`**          | <code><a href="#viewid">ViewID</a></code> |
| **`center`**      | <code><a href="#latlng">LatLng</a></code> |
| **`radius`**      | <code>number</code>                       |
| **`strokeColor`** | <code>string</code>                       |
| **`fillColor`**   | <code>string</code>                       |
| **`strokeWidth`** | <code>number</code>                       |
| **`zIndex`**      | <code>number</code>                       |
| **`visibility`**  | <code>boolean</code>                      |


#### PolygonOptions

| Prop              | Type                                      |
| ----------------- | ----------------------------------------- |
| **`id`**          | <code><a href="#viewid">ViewID</a></code> |
| **`points`**      | <code>{}</code>                           |
| **`tag`**         | <code>any</code>                          |
| **`strokeColor`** | <code>string</code>                       |
| **`fillColor`**   | <code>string</code>                       |
| **`strokeWidth`** | <code>number</code>                       |
| **`zIndex`**      | <code>number</code>                       |
| **`visibility`**  | <code>boolean</code>                      |


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

</docgen-api>
