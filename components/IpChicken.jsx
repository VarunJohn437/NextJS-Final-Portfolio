import { useState, useEffect } from 'react';
import Image from 'next/image'
import HeaderImage from '../public/assets/projects/chicken_header.jpg'
import InfoTopImage from '../public/assets/projects/chicken_info_top.jpg'
import InfoBottomImage from '../public/assets/projects/chicken_info_bottom.jpg'

export default function IpChicken() {
  const [ipAddress, setIpAddress] = useState('');
  const [userAgent, setUserAgent] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [weather, setWeather] = useState('');
  const [abuseReport, setAbuseReport] = useState('');

  useEffect(() => {
    // Fetch IP and initiate other API calls
    fetchIP();
  }, []);

  // Function to fetch IP address using ipify API
  const fetchIP = async () => {
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      setIpAddress(data.ip);
      fetchUserAgent();
      fetchTimeDetails();
      fetchWeather(data.ip);
      checkIPAbuse(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  // Function to fetch user agent details
  const fetchUserAgent = () => {
    setUserAgent(navigator.userAgent);
  };

  // Function to fetch current time and time zone
  const fetchTimeDetails = () => {
    const now = new Date();
    const options = { timeZoneName: 'short' };
    const timeString = now.toLocaleTimeString('en-US', options);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCurrentTime(timeString);
    setTimeZone(timeZone);
  };

  // Function to fetch weather based on IP using WeatherAPI.com
  const fetchWeather = async (ip) => {
    try {
      const apiKey = '392fa7bb21374fae976173900241207';
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ip}`);
      const data = await res.json();
      setWeather(`${data.current.condition.text}, ${data.current.temp_c}°C`);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  // Function to check IP abuse report using AbuseIPDB API
  const checkIPAbuse = async (ip) => {
    try {
      const apiKey = '2b3eecdd09860c80bdb4b590cf3cf17e1cf061b7b89fc5c6c31bca6f9280881bebe80b71d84c0bb7';
      const res = await fetch(`https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`, {
        headers: {
          'Key': apiKey,
          'Accept': 'application/json'
        }
      });
      const data = await res.json();
      const abuseConfidence = data.data.abuseConfidenceScore >= 75
        ? 'High confidence of abuse'
        : 'No significant abuse detected';
      setAbuseReport(abuseConfidence);
    } catch (error) {
      console.error('Error fetching abuse report:', error);
    }
  };

  return (
    <div id="IpChicken" className="w-full mx-auto max-w-[600px] py-16 font-sans bg-white p-10 text-center">
      <Image src={HeaderImage} className='py-8' alt='' />
      <h2 className='font-bold text-blue-600'>{ipAddress}</h2>
      <Image src={InfoTopImage} alt='' />
      <div className='px-16 text-left' >
        <p><strong>Your IP Address:</strong> {ipAddress}</p>
        <p><strong>User Agent:</strong> {userAgent}</p>
        <p><strong>Current Time:</strong> {currentTime}</p>
        <p><strong>Time Zone:</strong> {timeZone}</p>
        <p><strong>Weather:</strong> {weather}</p>
        <p><strong>Abuse Report:</strong> {abuseReport}</p>
      </div>
      <Image src={InfoBottomImage} alt='' />

    </div>
  );
}
