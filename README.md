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
* [`removeMarker(...)`](#removemarker)
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
* [`addListener('didBeginDragging', ...)`](#addlistenerdidbegindragging)
* [`addListener('didEndDragging', ...)`](#addlistenerdidenddragging)
* [`addListener('didTapAt', ...)`](#addlistenerdidtapat)
* [`addListener('didTapPOIWithPlaceID', ...)`](#addlistenerdidtappoiwithplaceid)
* [`addListener('didChange', ...)`](#addlistenerdidchange)
* [`addListener('onMapReady', ...)`](#addlisteneronmapready)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### create(...)

```typescript
create(options: { width: number; height: number; x: number; y: number; latitude?: number; longitude?: number; zoom?: number; }) => Promise<any>
```

| Param         | Type                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ width: number; height: number; x: number; y: number; latitude?: number; longitude?: number; zoom?: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### initialize(...)

```typescript
initialize(options: { key: string; }) => Promise<any>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### addMarker(...)

```typescript
addMarker(options: { latitude: number; longitude: number; opacity?: number; title?: string; snippet?: string; isFlat?: boolean; iconUrl?: string; draggable?: boolean; rotation?: number; key?: string; }) => Promise<any>
```

Adds a marker on the map

| Param         | Type                                                                                                                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ latitude: number; longitude: number; opacity?: number; title?: string; snippet?: string; isFlat?: boolean; iconUrl?: string; draggable?: boolean; rotation?: number; key?: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### removeMarker(...)

```typescript
removeMarker(options: { id: number; }) => Promise<any>
```

Removes a marker on the map

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setCamera(...)

```typescript
setCamera(options: { viewingAngle?: number; bearing?: number; zoom?: number; latitude?: number; longitude?: number; animate?: boolean; animationDuration?: number; coordinates?: LatLng[]; }) => Promise<any>
```

Repositions the camera

| Param         | Type                                                                                                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ viewingAngle?: number; bearing?: number; zoom?: number; latitude?: number; longitude?: number; animate?: boolean; animationDuration?: number; coordinates?: LatLng[]; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMapType(...)

```typescript
setMapType(options: { type: string; }) => Promise<any>
```

Sets the map type

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ type: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setIndoorEnabled(...)

```typescript
setIndoorEnabled(options: { enabled: boolean; }) => Promise<any>
```

Allows indoor maps to be enabled or disabled

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setTrafficEnabled(...)

```typescript
setTrafficEnabled(options: { enabled: boolean; }) => Promise<any>
```

Allows traffic information to be enabled or disabled

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### accessibilityElementsHidden(...)

```typescript
accessibilityElementsHidden(options: { hidden: boolean; }) => Promise<any>
```

[iOS Only] To hide accessiblity elements

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ hidden: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### padding(...)

```typescript
padding(options: { top: number; left: number; right: number; bottom: number; }) => Promise<any>
```

Adds padding around the map

| Param         | Type                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| **`options`** | <code>{ top: number; left: number; right: number; bottom: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### clear()

```typescript
clear() => Promise<any>
```

Clear any views like Marker, Shapes from the map

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### close()

```typescript
close() => Promise<any>
```

Destroy the mapView, use in ionViewDidLeave and similar

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### hide()

```typescript
hide() => Promise<any>
```

Hide the mapView, use when preventing any overlapping on other views

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### show()

```typescript
show() => Promise<any>
```

Show the hidden mapView

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### settings(...)

```typescript
settings(options: { allowScrollGesturesDuringRotateOrZoom?: boolean; compassButton?: boolean; consumesGesturesInView?: boolean; indoorPicker?: boolean; myLocationButton?: boolean; rotateGestures?: boolean; scrollGestures?: boolean; tiltGestures?: boolean; zoomGestures?: boolean; }) => Promise<any>
```

Map UI Settings

| Param         | Type                                                                                                                                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ allowScrollGesturesDuringRotateOrZoom?: boolean; compassButton?: boolean; consumesGesturesInView?: boolean; indoorPicker?: boolean; myLocationButton?: boolean; rotateGestures?: boolean; scrollGestures?: boolean; tiltGestures?: boolean; zoomGestures?: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### reverseGeocodeCoordinate(...)

```typescript
reverseGeocodeCoordinate(options: { latitude: number; longitude: number; }) => Promise<any>
```

Get Google Map address for a set of lat lng

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ latitude: number; longitude: number; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### enableCurrentLocation(...)

```typescript
enableCurrentLocation(options: { enabled: boolean; }) => Promise<any>
```

Enable user's current location

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### myLocation(...)

```typescript
myLocation(options: any) => Promise<any>
```

Get user location

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### viewBounds()

```typescript
viewBounds() => Promise<any>
```

Get view bounds in latlng. This polygon can be a trapezoid instead of a rectangle,
because a camera can have tilt. If the camera is directly over the center of the
camera, the shape is rectangular, but if the camera is tilted, the shape will
appear to be a trapezoid whose smallest side is closest to the point of view.

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setMapStyle(...)

```typescript
setMapStyle(options: { jsonString: string; }) => Promise<any>
```

Add styles to map with a style JSON string format specific by Google

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ jsonString: string; }</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### addPolyline(...)

```typescript
addPolyline(options: PolylineOptions) => Promise<any>
```

Shapes

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#polylineoptions">PolylineOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### addCircle(...)

```typescript
addCircle(options: CircleOptions) => Promise<any>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#circleoptions">CircleOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### addPolygon(...)

```typescript
addPolygon(options: PolygonOptions) => Promise<any>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#polygonoptions">PolygonOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setOnMarkerClickListener()

```typescript
setOnMarkerClickListener() => Promise<any>
```

Map click listeners

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setOnMapClickListener()

```typescript
setOnMapClickListener() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setOnPoiClickListener()

```typescript
setOnPoiClickListener() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### requestLocationPermission()

```typescript
requestLocationPermission() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setOnMyLocationClickListener()

```typescript
setOnMyLocationClickListener() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### setOnMyLocationButtonClickListener()

```typescript
setOnMyLocationButtonClickListener() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

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


### addListener('didBeginDragging', ...)

```typescript
addListener(eventName: 'didBeginDragging', listenerFunc: (results: any) => void) => PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'didBeginDragging'</code>        |
| **`listenerFunc`** | <code>(results: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('didEndDragging', ...)

```typescript
addListener(eventName: 'didEndDragging', listenerFunc: (results: any) => void) => PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'didEndDragging'</code>          |
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
| **`points`**     | <code>LatLng[]</code>                     |
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
| **`points`**      | <code>LatLng[]</code>                     |
| **`tag`**         | <code>any</code>                          |
| **`strokeColor`** | <code>string</code>                       |
| **`fillColor`**   | <code>string</code>                       |
| **`strokeWidth`** | <code>number</code>                       |
| **`zIndex`**      | <code>number</code>                       |
| **`visibility`**  | <code>boolean</code>                      |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
