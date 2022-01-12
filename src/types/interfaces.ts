export interface ViewID {
    androidID?: number;
    iOSID?: number;
}

export interface LatLng {
    latitude: number;
    longitude: number;
}

export interface CircleOptions {
    id?: ViewID;
    center: LatLng;
    radius: number;
    strokeColor?: string;
    fillColor?: string;
    strokeWidth?: number;
    zIndex?: number;
    visibility?: boolean;
}

export interface PolygonOptions {
    id?: ViewID;
    points: LatLng[];
    tag?: any;
    strokeColor?: string;
    fillColor?: string;
    strokeWidth?: number;
    zIndex?: number;
    visibility?: boolean;
}

export interface PolylineOptions {
    id?: ViewID;
    points: LatLng[];
    tag?: any;
    color?: string;
    width?: number;
    zIndex?: number;
    visibility?: boolean;
}