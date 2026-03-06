import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";
import busicon from "./Icons/bus.png"
import usericon from "./Icons/user.png"

const userIcon = new L.Icon({
          iconUrl: usericon, // user icon
          iconSize: [30, 30],
        });
        
         const busIcon = L.icon({
            iconUrl: busicon,
            iconSize: [40,40]
        })
        
         const stopIcon = L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            iconSize: [30,30]
        })
        
        const nearestStopIcon = L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
            iconSize: [30,30]
        })
        
         const busStops = [
          { name: "Salahaddin Square", lat: 35.5612, lng: 45.4301 },
          { name: "Azadi Street Stop", lat: 35.5580, lng: 45.4355 },
          { name: "Bazaar Stop", lat: 35.5620, lng: 45.4370 },
          { name: "Kareza Wshk Stop", lat: 35.57996237577638, lng: 45.426805872821305},
          { name: "Sheik Farid Stop", lat: 35.56744012099805, lng: 45.4204633353039},
          { name: "Bakhtiary Taza Stop", lat: 35.57771932474317, lng: 45.39793782234367},
          { name: "Twy Malik Stop", lat: 35.55761346161752, lng: 45.44463627145057},
          { name: "Sheikh Mhedin Stop", lat: 35.55469267498401, lng: 45.42133665635732},
        
          
        ];
        
         const busRoute = [
          { lat: 35.5612, lng: 45.4301 }, // Salahaddin Square
          { lat: 35.5608, lng: 45.4310 },
          { lat: 35.5600, lng: 45.4325 },
          { lat: 35.5595, lng: 45.4340 },
          { lat: 35.5580, lng: 45.4355 }, // Azadi Street Stop
        ];



         export default function Map({enableLocation}) {
            const [busPositionIndex, setBusPositionIndex] = useState(0);
            const [userPosition, setUserPosition] = useState(null)
            const [nearestStop, setNearestStop] = useState(null);
        
        
          useEffect(() => {
            if (enableLocation && navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  setUserPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  });
                },
                (error) => {
                  console.log("Error getting user location:", error);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
              );
            }
          }, [enableLocation]);
            
            useEffect(() => {
            const interval = setInterval(() => {
              setBusPositionIndex((prev) => (prev + 1) % busRoute.length);
            }, 1000);
            return () => clearInterval(interval);
          }, []);
        
          const distanceMeters = (lat1, lng1, lat2, lng2) => {
            const R = 6371000; // Earth radius in meters
            const toRad = (deg) => (deg * Math.PI) / 180;
            const dLat = toRad(lat2 - lat1);
            const dLng = toRad(lng2 - lng1);
            const a =
              Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
          };
        
        const [etaMinutes, setEtaMinutes] = useState(null);
        
        useEffect(() => {
          if (!userPosition) return;
        
          let closest = null;
        
          busStops.forEach((stop) => {
            const dist = distanceMeters(
              userPosition.lat,
              userPosition.lng,
              stop.lat,
              stop.lng
            );
        
            if (!closest || dist < closest.dist) {
              closest = { ...stop, dist };
            }
          });
        
          if (closest) {
            setNearestStop(closest);
            setEtaMinutes(Math.round(closest.dist / 333)); // 20km/h
          }
        }, [userPosition]);
        
        
          const getDistance = (a, b) => {
          const R = 6371;
          const dLat = (b.lat - a.lat) * Math.PI / 180;
          const dLng = (b.lng - a.lng) * Math.PI / 180;
        
          const x =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(a.lat * Math.PI / 180) *
              Math.cos(b.lat * Math.PI / 180) *
              Math.sin(dLng / 2) ** 2;
        
          return 2 * R * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
        };

    
        
        
        
        
        
        
        
        
          return (
            <>
            <MapContainer
          center={[35.5606, 45.4330]}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap'
          />
        
          {/* Bus stops */}
          {busStops.map((stop, idx) => (
            <Marker key={idx} position={[stop.lat, stop.lng]} icon={stopIcon}>
              <Popup>{stop.name}</Popup>
            </Marker>
          ))}
        
          {/* Line from user to nearest stop */}
        {userPosition &&
          nearestStop &&
          userPosition.lat &&
          userPosition.lng &&
          nearestStop.lat &&
          nearestStop.lng && (
            <Polyline
              positions={[
                [userPosition.lat, userPosition.lng],
                [nearestStop.lat, nearestStop.lng],
              ]}
              color="blue"
            />
        )}
        
        
          {/* Moving bus */}
          <Marker position={[busRoute[busPositionIndex].lat, busRoute[busPositionIndex].lng]} icon={busIcon}>
            <Popup>Bus 1</Popup>
          </Marker>
        
          {/* User location */}
          {userPosition && (
            <Marker position={[userPosition.lat, userPosition.lng]} icon={userIcon}>
              <Popup>Your Location</Popup>
            </Marker>
          )}
        </MapContainer>
        
        {userPosition && nearestStop && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "rgba(255,255,255,0.95)",
              padding: "14px",
              textAlign: "center",
              fontWeight: "bold",
              zIndex: 1000,
            }}
          >
            Nearest stop: {nearestStop.name} — ETA: {etaMinutes} min
          </div>
        )}
        
        </>
          )
        
        
    
}







// Client id 1079979545594-1iu5j2jbbp8tjok9dmegahavd7idi9kk.apps.googleusercontent.com

// Client secret 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