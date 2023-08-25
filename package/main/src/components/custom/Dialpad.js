import React, { useState,useEffect } from 'react';
  /* eslint-disable no-unused-vars */

import Select from 'react-select';
import {
  Button,
  Col,
  Container,
  Label,
  Row,
  Input,
  FormGroup,
  InputGroupText,
  InputGroup,
} from 'reactstrap';
import {
  Invitation,
  Inviter,
  InviterOptions,
   Registerer,
  Session,
  SessionState,
   RegistererState,
   UserAgent,
  UserAgentOptions,
  InvitationAcceptOptions,
  Referral,
} from "sip.js";

import Cookies from "js-cookie";
import * as Icon from 'react-feather';
import '../../assets/custom/custom.css';
import { OutgoingInviteRequest } from "sip.js/lib/core";
import { useSelector } from 'react-redux';

const digits = [
  { digit: '1' },
  { digit: '2', subDigit: 'ABC', class: null },
  { digit: '3', subDigit: 'DEF', class: null },
  { digit: '4', subDigit: 'GHI', class: null },
  { digit: '5', subDigit: 'JKL', class: null },
  { digit: '6', subDigit: 'MNO', class: null },
  { digit: '7', subDigit: 'PQRS', class: null },
  { digit: '8', subDigit: 'TUV', class: null },
  { digit: '9', subDigit: 'WXYZ', class: null },
  { digit: '*', subDigit: null, class: 'astrisk' },
  { digit: '0', subDigit: null, class: null },
  { digit: '#', subDigit: null, class: null },
];
let incomingSession = "";
let outgoingSession = "";
let userAgent= "";

export default function Dialpad() {
  const isMode = useSelector((state) => state.customizer.isDark);
  let [number] = useState("");
  //let [number, setNumber] = useState("");
  const close = "/assets/icons/close.svg";
const LeadUserIcon = "/assets/icons/lead-user.svg";
const manualIcon = "/assets/icons/manual.svg";
const CallerTuneFile = "/ringtone.mp3";

  const [liveCall, setLiveCall] = useState(false);
    const [isHold, setIsHold] = useState(false);
    const callerTuneplay = document.createElement("AUDIO")
    document.body.appendChild(callerTuneplay);
    callerTuneplay.src = CallerTuneFile;
//    const callerTuneplay = new Audio(CallerTuneFile);
    const [isMuted, setIsMuted] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isShowCallDuration, setIsShowCallDuration] = useState(false);
    const [isIncomingCall, setIsIncomingCall] = useState(false);
    const [showIncomingModal, setShowIncomingModal] = useState(false);
    const [addNoteShowCallDuration, setAddNoteShowCallDuration] =
      useState(false);
    const [isAddNote, setIsAddNote] = useState(false);
    const [isCallFailed, setIsCallFailed] = useState(false);
  
    const [showActiveModal, setShowActiveModal] = useState(false);
    const [addNoteSeconds, setAddNoteSeconds] = useState(0);
    const [addNoteMinutes, setAddNoteMinutes] = useState(0);
    const [page, setPage] = useState("");
    const [callerNumber, setCallerNumber] = useState("");
    const [callerName, setCallerName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [callType, setCallType] = useState("");
    const [showConferenceBtn, setShowConferenceBtn] = useState(true);
    const campaignType = "";//useCampaignType();
    const isCallResume = "";//useCallResume();
  
    useEffect(() => {
   //   if (user?.isPbx) {
        userAgentRegistration();
   //   } else {
   //     if (!isCallResume || campaignType !== "inbound") {
   //       userAgentRegistration();
   //     }
   //   }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCallResume, campaignType]);
  const classDisplay2 = isMode ? 'next3-dark-icon-container' : 'next3-icon-container';
  const classDisplay6 = isMode ? 'next6-dark-container' : 'next6-container';
  const classNextTop6Container = isMode ? 'next6-top-dark-container' : 'next6-topcontainer';
  const classDisplayLabel6 = isMode ? 'next6-dark-label-font' : 'next6-label-font';
  const classDisplaySipLabel6 = isMode ? 'next6-dark-sip-label-font' : 'next6-sip-label-font';
  const classDisplayPhoneLabel7 = isMode
    ? 'next7-dark-phonenumber-label-font'
    : 'next7-phonenumber-label-font';
  console.log('ismode---', isMode);
  const classDisplay12 = isMode ? 'next12-dark-container' : 'next12-container';
  const classDisplayLabelFont12 = isMode ? 'next12-dark-label-font' : 'next12-label-font';
  const [inputValue, setInputValue] = useState('');
  //0 : Default
  //1 : Incoming Call
  //2 : After Answer
  //3 : Dialpad
  //4 : DTMF Dialpad
  //5 : Transfer Options screen
  //6 : Extension Transfer
  //7 : PSTN Transfer
  //8 : IVR Transfer
  //9 : Call Queue Transfer
  //10 : Ring Group Transfer
  //11 : Attended Transfer hangup button
  //12 : Hangup Screen with note
  const [displayFlag, setDisplayFlag] = useState(3);
  const [isMutted, setIsMutted] = useState(false);
  let options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  //REGISTER CALL
let durationInterval: any;
let incomingMediaStream: any;
let outgoingMediaStream: any;
let secondCallSession: any;
  // CALL DURATION
  const callDuration = async (callStatus: Boolean) => {
    if (callStatus === true) {
      //	Call transfer type

      let secs = 0;
      let mins = 0;

      durationInterval = setInterval(() => {
        if (secs < 60) {
          secs +=  1;
          setSeconds(secs);
          setAddNoteSeconds(secs);
        }
        if (secs >= 59) {
          secs = 0;
          mins += 1;
          setSeconds(secs);
          setMinutes(mins);
          setAddNoteSeconds(secs);
          setAddNoteMinutes(mins);
        }
      }, 1000);
    } else {
      setSeconds(0);
      setMinutes(0);
      clearInterval(durationInterval);
    }
  };

  // RECEIVE CALL
  const receiveCall = () => {
    console.log('IN Receive Call');
    //callerTune.pause(); //	Caller tune pause
    if (Cookies.get("isReceivedDirect") === "0") {
///      dispatch(onShowLeadInfo(true));
    }
    console.log("incomingSession CHECK");
    console.log(incomingSession);
    if (incomingSession) {
      try {
        incomingSession.accept();
        callDuration(false);
      } catch (error) {
        console.log("Incoming session accept error found - ", error);
      }
    }
  };
  // HOLD CALL
  const onCallHold = () => {
    setIsHold(true);

    if (outgoingSession && outgoingSession._state !== "Terminated") {
      if (outgoingSession._state !== "Establishing") {
        outgoingSession.invite({
          sessionDescriptionHandlerOptions: {
            hold: true,
          },
        });
      }
    }

    if (incomingSession && incomingSession._state !== "Terminated") {
      if (incomingSession._state !== "Establishing") {
        incomingSession.invite({
          sessionDescriptionHandlerOptions: {
            hold: true,
          },
        });
      }
    }
  };

  // UN-HOLD CALL
  const onCallUnHold = () => {
    setIsHold(false);

    if (outgoingSession && outgoingSession._state !== "Terminated") {
      if (outgoingSession._state !== "Establishing") {
        outgoingSession.invite({
          sessionDescriptionHandlerOptions: {
            hold: false,
          },
        });
      }
    }

    if (incomingSession && incomingSession._state !== "Terminated") {
      if (incomingSession._state !== "Establishing") {
        incomingSession.invite({
          sessionDescriptionHandlerOptions: {
            hold: false,
          },
        });
      }
    }
  };
    //	VOLUME CONTROL
    const controlVolume = (event: any) => {
      const mediaElement: any = document.getElementById("mediaElement");
  
      if (
        incomingSession &&
        (incomingSession._state === "Initial" ||
          incomingSession._state === "Establishing" ||
          incomingSession._state === "Established")
      ) {
        if (incomingSession._state === "Established") {
          mediaElement.volume = (parseInt(event.target.value, 10) || 0) / 100;
        }
      }
  
      if (
        outgoingSession &&
        (outgoingSession._state === "Establishing" ||
          outgoingSession._state === "Established")
      ) {
        if (outgoingSession._state === "Established") {
          mediaElement.volume = (parseInt(event.target.value, 10) || 0) / 100;
        }
      }
    };
  //Mute call
  const muteMediaSession = () => {
    const mediaElement: any = document.getElementById("mediaElement");

    if (mediaElement) {
      //mediaElement.pause();
      setIsMuted(true);
    }

    if (
      incomingSession &&
      (incomingSession._state === "Initial" ||
        incomingSession._state === "Establishing" ||
        incomingSession._state === "Established")
    ) {
      if (incomingSession._state === "Established") {
        const localStream =
          incomingSession.sessionDescriptionHandler.peerConnection.getLocalStreams()[0];
        localStream.getAudioTracks().forEach((track: any) => {
          track.enabled = false; // Mute A's outgoing audio
        });
      }
    }

    if (
      outgoingSession &&
      (outgoingSession._state === "Establishing" ||
        outgoingSession._state === "Established")
    ) {
      if (outgoingSession._state === "Established") {
        const localStream =
          outgoingSession.sessionDescriptionHandler.peerConnection.getLocalStreams()[0];
        localStream.getAudioTracks().forEach((track: any) => {
          track.enabled = false; // Mute A's outgoing audio
        });
      }
    }

    if (
      outgoingSession &&
      (outgoingSession._state === "Establishing" ||
        outgoingSession._state === "Established")
    ) {
      if (outgoingSession._state === "Established") {
        const remoteStream =
          outgoingSession.sessionDescriptionHandler.peerConnection.getRemoteStreams()[0];
        remoteStream.getAudioTracks().forEach((track: any) => {
          track.enabled = true; // Mute A's outgoing audio
        });
      }
    }

    if (
      secondCallSession &&
      (secondCallSession._state === "Establishing" ||
        secondCallSession._state === "Established")
    ) {
      if (secondCallSession._state === "Established") {
        const remoteStream =
          secondCallSession.sessionDescriptionHandler.peerConnection.getLocalStreams()[0];
        remoteStream.getAudioTracks().forEach((track: any) => {
          track.enabled = false; // Mute A's incoming audio from C
        });
      }
    }
  };
  //Unmute call
  const unMuteMediaSession = () => {
    const mediaElement: any = document.getElementById("mediaElement");

    if (mediaElement) {
      mediaElement.play();
      setIsMuted(false);
    }

    if (
      incomingSession &&
      (incomingSession._state === "Initial" ||
        incomingSession._state === "Establishing" ||
        incomingSession._state === "Established")
    ) {
      if (incomingSession._state === "Established") {
        const remoteStream =
          incomingSession.sessionDescriptionHandler.peerConnection.getLocalStreams()[0];
        remoteStream.getAudioTracks().forEach((track: any) => {
          track.enabled = true; // Mute A's incoming audio from C
        });
      }
    }

    if (
      outgoingSession &&
      (outgoingSession._state === "Establishing" ||
        outgoingSession._state === "Established")
    ) {
      if (outgoingSession._state === "Established") {
        const remoteStream =
          outgoingSession.sessionDescriptionHandler.peerConnection.getLocalStreams()[0];
        remoteStream.getAudioTracks().forEach((track: any) => {
          track.enabled = true; // Mute A's incoming audio from C
        });
      }
    }

    if (
      secondCallSession &&
      (secondCallSession._state === "Establishing" ||
        secondCallSession._state === "Established")
    ) {
      if (secondCallSession._state === "Established") {
        const remoteStream =
          secondCallSession.sessionDescriptionHandler.peerConnection.getLocalStreams()[0];
        remoteStream.getAudioTracks().forEach((track: any) => {
          track.enabled = true; // Mute A's incoming audio from C
        });
      }
    }
  };
//media------------------------------------
  const remoteStream = new MediaStream();
  const setupRemoteMedia = (mediaSession: any) => {
    console.log("In Setup Remote Media");
    let mediaElement: any = document.getElementById("mediaElement");
    try {
      console.log("In Setup Remote Media1");
      mediaSession.sessionDescriptionHandler.peerConnection
        .getReceivers()
        .forEach((receiver: any) => {
          if (receiver.track) {
            console.log("Audio remoteStream");
            console.log(receiver);

            remoteStream.addTrack(receiver.track);
            console.log(remoteStream);
                       
            console.log("srcObject HARSH");
            mediaElement.srcObject = remoteStream;
           
            console.log("mediaElement HARSH");
            console.log(mediaElement); 
            mediaElement.play();
          }
        });
    } catch (error) {
      console.log("Media audio session error - ", error);
    }
  };
  
//cleanupMedia-----------------------------
    const cleanupMedia = () => {
      const mediaElement: any = document.getElementById("mediaElement");
      try {
        if (mediaElement) {
          mediaElement.srcObject = null;
          mediaElement.pause();
        }
      } catch (error) {
        console.log("Clean media audio session error - ", error);
      }
    };
//hangupcall----------------------------------
    const hangupCall = () => {
    setAddNoteSeconds(seconds);
    setAddNoteMinutes(minutes);
      console.log("In Hangup Call")
      try {
        //	Manage outgoing state on call hangup
        if (outgoingSession) {
          setDisplayFlag(12);
          if (outgoingSession._state === "Establishing") {
            //alert('123');
            outgoingSession.cancel();
          } else if (outgoingSession._state === "Established") {
            //alert('456');
            outgoingSession.bye();
          }
        }
        console.log("In Hangup Call")
        console.log(incomingSession._state)
        if (incomingSession) {
          if (
            incomingSession._state === "Initial" ||
            incomingSession._state === "Establishing"
          ) {
            // incomingSession.cancel()
            //incomingSession = null;
            incomingSession.reject();
            incomingSession = null;
          } else if (incomingSession._state === "Established") {
            // incomingSession.bye();
            // incomingSession.refer(secondCallSession);
            if (
              secondCallSession &&
              secondCallSession.state === "Established"
            ) {
              if (
                incomingSession &&
                incomingSession.state === "Established"
              ) {
                incomingSession.refer(secondCallSession);
              }
            } else {
              //incomingSession = null;
              incomingSession.bye();
              incomingSession = null;
              //outgoingSession = null;
            }
          }
        }
      } catch (error) {
        console.log("Incoming or Outgoing session not found - ", error);
      }
      //history.goBack();	//	Go back on disconnect
    };
  //	Call keypadsider properties from statuscard component
  const callKeypadSiderProperties = (functionName = "", argumentOne = "") => {
    if (functionName !== "") {
      let dataForLocalStorageSc = {
        functionName: functionName,
        argumentOne: argumentOne,
      };
      // console.log("dataForLocalStorageSc ===> ");
      console.log("dataForLocalStorageSc", dataForLocalStorageSc);

      switch (functionName) {
        case "callTermination":
          Cookies.set(
            "statuscardToKeypadSider",
            JSON.stringify(dataForLocalStorageSc),
            { expires: 1 }
          );
          break;
        case "callEstablished":
          Cookies.set(
            "statuscardToKeypadSider",
            JSON.stringify(dataForLocalStorageSc),
            { expires: 1 }
          );
          break;
        default:
          console.log("Statuscard to Keypadsider default");
          console.log(functionName);
          console.log(argumentOne);
          break;
      }
    }
  };    
// INCOMING CALL INVITATION
   const onInvite = (invitation: any) => {
    setDisplayFlag(1);
    console.log("INCOMING INCOMING BE READY ========================");
     ///    if (!user?.isPbx && campaignType === "outbound") {
      // User is not a PBX user and campaignType is "outbound"
      // Reject the incoming call
      ///      invitation.reject({ status_code: 603, reason_phrase: "Decline" });
      ///      console.log("Outbound campaign: No incoming calls allowed.");
      ///      return;
      ///    }
    console.log(
      "INCOMING INCOMING BE READY ==========invitation==============",
      invitation
    );
///    Cookies.remove("call_stick_status");
///    Cookies.remove("call_stick_type");
///    Cookies.remove("routing_uuid");
///    Cookies.remove("destination_number");
///    Cookies.remove("call_callerID");
///    dispatch(setIsCallHangUp(false));
///    dispatch(onSetAddNoteId(null));
///    dispatch(onAddLeadNoteId(null));
///    Cookies.remove("callId");
///    console.log(invitation);
///    console.log(outgoingSession);
///    console.log(incomingSession);
    if (outgoingSession && outgoingSession._state !== "Terminated") {
      invitation.reject();
      return;
    }
    if (incomingSession && incomingSession._state !== "Terminated") {
      invitation.reject();
      return;
    }

    invitation.delegate = {
      // Handle incoming REFER request.
      onRefer(referral: Referral) {
        //console.log("Handle incoming REFER request.");
        referral.accept().then(() => {
          referral.makeInviter().invite();
        });
      },
    };

    incomingSession = invitation;

    //	Set caller number
    let callNumber = "Unknown";
    let callerId = "";
    let lead_uuid = "";
    let lead_name = "";
    let call_masking = "1";
    let call_stick_status = null;
    let call_stick_type = "";
    let routing_uuid = "";
    let destination_number = "";

    if (
      invitation?.incomingInviteRequest.earlyDialog.dialogState.remoteURI.normal
        .user
    ) {
      callNumber =
        invitation.incomingInviteRequest.earlyDialog.dialogState.remoteURI
          .normal.user;

      const headers =
        invitation &&
        invitation.incomingInviteRequest &&
        invitation.incomingInviteRequest.message &&
        invitation.incomingInviteRequest.message.headers &&
        invitation.incomingInviteRequest.message.headers;

      if (headers["X-Custom-Callid"] && headers["X-Custom-Callid"][0]) {
        callerId = headers["X-Custom-Callid"][0].raw;
      } else {
        callerId = "";
      }

      if (headers["X-Leaduuid"] && headers["X-Leaduuid"][0]) {
        lead_uuid = headers["X-Leaduuid"][0].raw;
      } else {
        lead_uuid = "";
      }

      if (headers["X-Lead-Name"] && headers["X-Lead-Name"][0]) {
        lead_name = headers["X-Lead-Name"][0].raw;
      } else {
        lead_name = "";
      }

      if (headers["X-Call-Masking"] && headers["X-Call-Masking"][0]) {
        call_masking = headers["X-Call-Masking"][0].raw;
      } else {
        call_masking = "1";
      }

      if (headers["X-Call-Stick-Status"] && headers["X-Call-Stick-Status"][0]) {
        call_stick_status = headers["X-Call-Stick-Status"][0].raw;
      } else {
        call_stick_status = null;
      }

      if (headers["X-Call-Stick-Type"] && headers["X-Call-Stick-Type"][0]) {
        call_stick_type = headers["X-Call-Stick-Type"][0].raw;
      } else {
        call_stick_type = "";
      }

      if (headers["X-Routing-Uuid"] && headers["X-Routing-Uuid"][0]) {
        routing_uuid = headers["X-Routing-Uuid"][0].raw;
      } else {
        routing_uuid = "";
      }

      if (
        headers["X-Original-Destination-Number"] &&
        headers["X-Original-Destination-Number"][0]
      ) {
        destination_number = headers["X-Original-Destination-Number"][0].raw;
      } else {
        destination_number = "";
      }
    }

    if (call_stick_status === "0") {
      Cookies.set("call_stick_status", call_stick_status);
      Cookies.set("call_stick_type", call_stick_type);
      Cookies.set("routing_uuid", routing_uuid);
      Cookies.set("destination_number", destination_number);
      Cookies.set("call_callerID", callNumber);
    }

    if (lead_uuid !== "" && lead_uuid !== "null") {
    ///      dispatch(onAddLeadNoteId(lead_uuid));
    ///      !user?.isPbx && onGetLeadInfo(lead_uuid);
    }

    setCallerName(lead_name ? lead_name : "");
    let CallerNumber =
      call_masking === "0"
        ? Array.from(callNumber).fill("X", 2, -2).join("")
        : callNumber;
    setCallerNumber(CallerNumber);

    if (Cookies.get("isReceivedDirect") === "0") {
      receiveCall();
    } else {
      const setScreen: boolean =
        Cookies.get("showModal") === "true" ? true : false;
      setIsIncomingCall(setScreen ? true : false);
      setShowIncomingModal(!setScreen ? true : false);
      console.log("HEREEE FOR CALLER TUNE");
          callerTuneplay.play(); //	Caller tune play
    ///      callerTuneplay.currentTime = 0;
    }
    setCallType("Incoming Call From");

    ///    if (!user?.isPbx) {
    ///      onUpdateLiveAgentEntry("Incoming", callNumber);
    ///    }

    invitation.stateChange.addListener((incomingState: SessionState) => {
      console.log(incomingState, "incomingState");
      switch (incomingState) {
        case SessionState.Initial:
          console.log("Incoming initiated ....");
          Cookies.set("is_call_start", "0");
      //          callerTuneplay.play(); //	Caller tune play
      //          callerTuneplay.currentTime = 0;
                break;

        case SessionState.Establishing:
          console.log("Incoming establishing ....");
          Cookies.set("is_call_start", "0");
          callerTuneplay.play(); //	Caller tune play
          callerTuneplay.currentTime = 0;
          break;

        case SessionState.Established:
          setDisplayFlag(2);
          console.log("Incoming established ....");
          console.log("invitation------------------->", invitation);
          Cookies.set("is_call_start", "0");
          callerTuneplay.pause(); //	Caller tune play
          setupRemoteMedia(invitation); //	Media audio control
          callDuration(true); //	Call duration
          Cookies.set("callId", callerId);
///          dispatch(onSetAddNoteId(callerId));
          setIsShowCallDuration(true); // show call duration
          setAddNoteShowCallDuration(true);
          callKeypadSiderProperties("callEstablished", "Established"); //	On answer manage keypadsider states
          break;

        case SessionState.Terminated:
          console.log("Incoming terminated ....");
          console.log("invitation------------------->", invitation);
          console.log("invitation------------------->", secondCallSession);
        callDuration(false);
          if (
            (secondCallSession && secondCallSession._state === "Established") ||
            (secondCallSession && secondCallSession._state === "Establishing")
          ) {
            //incomingSession.refer(secondCallSession)
            console.log("COMING HERE 0");
            setPage("");
            setupRemoteMedia(secondCallSession);
            break;
          } else {
            setShowIncomingModal(false); // incoming call Model false
            setIsIncomingCall(false); // incoming call screen false
            setLiveCall(false);
            handleBackScreen(12);
            Cookies.remove("LeadDialName");
///            dispatch(onDial(null));
///            if (!!Cookies.get("callId") && user?.isPbx) setIsAddNote(true);
///            if (!!Cookies.get("callId") && !user?.isPbx) {
///              dispatch(setIsCallHangUp(true));
///            }
            Cookies.set("is_call_start", "1");
///            if (!!!Cookies.get("callId")) {
///              dispatch(onAddLeadNoteId(null));
///              dispatch(clearLeadDetails());
///              setShowModal(false);
///            }
            cleanupMedia(); //	Stop media audio control
            callerTuneplay.pause(); //	Caller tune pause
            //incomingSession = null;
            callDuration(false); //	Call duration
///            onGetCallStatistic(); // call History refresh
///            onMissedCallCountGet(); // call missed call count
            callKeypadSiderProperties("callTermination", "Termination"); //	On termination manage keypadsider states
            break;
          }

        case SessionState.Terminating:
          console.log("Incoming terminating ....");
          setShowIncomingModal(false); // incoming call Model false
          setIsIncomingCall(false); // incoming call screen false
          setLiveCall(false);
          Cookies.remove("LeadDialName");
///          dispatch(onDial(null));
///          if (!!Cookies.get("callId") && user?.isPbx) setIsAddNote(true);
///          if (!!Cookies.get("callId") && !user?.isPbx) {
///            dispatch(setIsCallHangUp(true));
///            setShowModal(false);
///          }
          Cookies.set("is_call_start", "1");
///          if (!!!Cookies.get("callId")) {
///            dispatch(onAddLeadNoteId(null));
///            dispatch(clearLeadDetails());
///          }
          cleanupMedia(); //	Stop media audio control
          callerTuneplay.pause(); //	Caller tune pause
          callDuration(false); //	Call duration
          callKeypadSiderProperties("callTermination", "Termination"); //	On termination manage keypadsider states
          break;

        default:
          console.log(
            "Could not identified incoming state .... ",
            incomingState
          );
          setShowIncomingModal(false); // incoming call Model false
          setIsIncomingCall(false);
          setLiveCall(false);
          Cookies.remove("LeadDialName");
///          dispatch(onDial(null));
///          if (!!Cookies.get("callId") && user?.isPbx) setIsAddNote(true);
///          if (!!Cookies.get("callId") && !user?.isPbx) {
///            dispatch(setIsCallHangUp(true));
///            setShowModal(false);
///          }
          Cookies.set("is_call_start", "1");
///          if (!!!Cookies.get("callId")) {
///            dispatch(onAddLeadNoteId(null));
///            dispatch(clearLeadDetails());
///            setShowModal(false);
///          }
          callerTuneplay.pause(); //	Caller tune pause
          break;
      }
    });

    let constrainsDefault: MediaStreamConstraints = {
      audio: true,
      video: false,
    };

    const options: InvitationAcceptOptions = {
      sessionDescriptionHandlerOptions: {
        constraints: constrainsDefault,
      },
    };
    Cookies.get("isReceivedDirect") !== "0" && invitation.progress(options);
  };

//REGISTER PROCESS
const userAgentRegistration = () => {  
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUserData')) || {};
  const { extension_details: [extesionInfo] = {} } = loggedInUser;
  const { tenant: [tenantInfo] = {} } = loggedInUser;
  const { username, password } = extesionInfo || {};
  //const domain = 'itsmycallcenter.com:5062';
  const domain = `${tenantInfo.domain}:${localStorage.getItem('sipPort')}`;
  const sipuri = `sip:${username}@${domain}`;
  const UAURI = UserAgent.makeURI(sipuri);
  if (!UAURI) {
    throw new Error("Failed to create UserAgent URI ....");
  }

      const userOptions: any = {
        uri: UAURI,
        authorizationPassword: password,
        authorizationUsername: username,
        transportOptions: {
          server: `${process.env.REACT_APP_WSS_SERVER}`,
          traceSip: true,
        },
        delegate: { onInvite },
        register: true,
        noAnswerTimeout: 60,
        userAgentString: "itsmycallcenter | WEBRTC ",
        dtmfType: "info",
        displayName: username,
        activeAfterTransfer: false, //	Die when the transfer is completed
        logBuiltinEnabled: false, //	Boolean - true or false - If true throws console logs
      };
        userAgent = new UserAgent(userOptions);
        userAgent
          .start()
          .then(() => {
            console.log("Connected ....");
            const registerer = new Registerer(userAgent);
            registerer.stateChange.addListener(
              (registrationState: RegistererState) => {
                console.log("registrationState", registrationState);
              }
            );
            registerer.stateChange.addListener(
              (registrationState: RegistererState) => {
                console.log("registrationState => ", registrationState);
                switch (registrationState) {
                  case RegistererState.Registered:
                    console.log("Registered11111 ....");
                    break;
                  case RegistererState.Unregistered:
                    console.log("Unregistered ....");
                    break;
                  case RegistererState.Terminated:
                    console.log("Terminated ....");
                    break;
                  default:
                    console.log(
                      "Could not identified registration state .... ",
                      registrationState
                    );
                    break;
                }
              }
            );
            registerer
              .register()
              .then((request: any) => {
                console.log("Successfully sent REGISTER request .... ", request);
              })
              .catch((error: any) => {
                console.log("Failed to send REGISTER request .... ", error);
              });
          })
          .catch((error: any) => {
            console.log("Failed to connect user agent .... ", error);
          });
        };    
//outgoing call-------------------------------------------------
const callOutboundClick = () => {
  setDisplayFlag(2);
  const number = inputValue;
  const domain = 'itsmycallcenter.com:5062';
  const callsipuri = `sip:${number}@${domain}`;
  const targetURI: any = UserAgent.makeURI(
    callsipuri
  );
  const inviter = new Inviter(userAgent, targetURI);
  inviter.delegate = {
    // Handle outgoing REFER request.
    onRefer(referral: Referral) {
      //console.log("Handle outgoing REFER request.");
      referral.accept().then(() => {
        referral.makeInviter().invite();
      });
    },
  };
  outgoingSession = inviter;

  inviter.stateChange.addListener((callingState: SessionState) => {
    console.log("outgoing callingState =========> ", callingState);
    switch (callingState) {
      case SessionState.Establishing:
        console.log("Ringing on destination ....");
        console.log(inviter);
        break;

      case SessionState.Established:
        console.log("Call answered ....");
        console.log(inviter);
          callDuration( true ); //	Call duration
        setupRemoteMedia(inviter); //	Media audio control

        break;

      case SessionState.Terminated:
        console.log("Call terminated ....");
        handleBackScreen(12);
        callDuration(false);
        cleanupMedia(); //	Stop media audio control
        break;

      case SessionState.Terminating:
        console.log("Call terminating ....");
        callDuration(false);
        handleBackScreen(12);
        cleanupMedia(); //	Stop media audio control
        break;

      default:
        console.log(
          "Could not identified calling state while calling .... ",
          callingState
        );
         callDuration( false ); //	Call duration

        break;
    }
  });

  // Options including delegate to capture response messages
  const inviteOptions: any = {
    requestDelegate: {
      onAccept: (response: any) => {
        //console.log(response.message);
        console.log("Positive response ....");
        console.log(response);
      },
      onReject: (response: any) => {
        console.log("Negative response ....");

        console.log(response);
      },
      onProgress: (response: any) => {
        console.log(response.message.statusCode);
        console.log(
          "183+180 Session Progress - Call is in progress."
        );
        if (response.message.statusCode === 183) {
          // alert("183 Session Progress");
          setupRemoteMedia(inviter); //	Media audio control
          console.log(response);
          // callerTuneplay.pause(); //	Caller tune pause
        }
        console.log(response);
      },
    },
    sessionDescriptionHandlerOptions: {
      constraints: {
        audio: true,
        video: false,
      },
    },
  };

  //	Send invition
  inviter
    .invite(inviteOptions)
    .then((request: OutgoingInviteRequest) => {
      console.log("Successfully sent INVITE ....");
      //console.log("INVITE request ....");
      // console.log(request);
    })
    .catch((error: Error) => {
      console.log("Failed to send INVITE ....");
      // console.log(error);
    });
  //};
};
  const handleDigitClick = (digit) => {
    setInputValue(inputValue + digit);
  };
  const answerincomingcall = () =>{
    console.log("in answerincomingcall");
    receiveCall();
//    setDisplayFlag(2);
  };
  const handleReceive = (screenNumber) => {
    setDisplayFlag(screenNumber);
  };
  const handleMuteClick = () => {
    if(isMutted){
      unMuteMediaSession();
    }else{
      muteMediaSession();
    }
    setIsMutted(!isMutted);
  };
  // const openDialPad = () => {
  //   setDisplayFlag(4);
  // };
  const handleSelect = (selectedOption) => {
    console.log('Selected option:', selectedOption);
    // Perform desired action with the selected option
  };
  // const openTransferScreen = () => {
  //   setDisplayFlag(5);
  // }
  const handleBackScreen = (displayScreen) => {
    setDisplayFlag(displayScreen);
  };
  // const displayFlag = 1;
  return (
    <>
        <audio controls id="mediaElement" style={{ display: 'none' }}>

        <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions"/>

        </audio>
      {displayFlag !== 2 &&
        displayFlag !== 1 &&
        displayFlag !== 4 &&
        displayFlag !== 5 &&
        displayFlag !== 6 &&
        displayFlag !== 7 &&
        displayFlag !== 8 &&
        displayFlag !== 9 &&
        displayFlag !== 10 &&
        displayFlag !== 11 &&
        displayFlag !== 12 && (
          <div className="custom-dial-pad">
            <div className="pad">
              <div className="dial-pad">
                <div className="contact">
                  <div className="avatar"></div>
                  <div className="contact-buttons">
                    <Button className="icon-message"></Button>
                    <Button className="icon-video"></Button>
                  </div>
                </div>
                <div className="phoneString">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="rtl-input"
                  />
                </div>
                <div className="digits">
                  {digits.map((digitObj) => (
                    <div
                      key={digitObj.digit}
                      className={`dig ${digitObj.subDigit ? 'number-dig' : digitObj.class}`}
                      name={digitObj.digit}
                      onClick={() => handleDigitClick(digitObj.digit)}
                    >
                      {digitObj.digit}
                      {digitObj.subDigit && <div className="sub-dig">{digitObj.subDigit}</div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="call-pad"></div>
              <div className="call action-dig" onClick={() => callOutboundClick()}>
                <span className="">
                  <Icon.Phone size={30} />
                </span>
              </div>
            </div>
          </div>
        )}
      {displayFlag === 1 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar-container">
              <div className="avatar">
                <div className="avatar-placeholder">HP</div>
              </div>
              <div className="calling-text">Calling...</div>
              <div className="next2-nametext">Harsh Patel</div>
              <div className="next2-numbertext">+91 992559592</div>

              {/* <div className="calling-text">
  Calling<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span>
</div> */}
            </div>

            <div className="d-flex justify-content-around">
              <Col sm="2" className="btn-pointer" onClick={() => answerincomingcall() }>
                <span className="next2-action-dig calling">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </Col>
              <Col sm="2" className="btn-pointer" onClick={() => hangupCall() }>
                <span className="next2-action-dig hangup">
                  <Icon.PhoneOff size={40} color="#FFF" />
                </span>
              </Col>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 2 && (
        <div className="custom-dial-pad">
          <Container>
            <div className="pad">
              <div className="avatar-container">
                <div className="avatar">
                  <div className="avatar-placeholder">HP</div>
                </div>
                {/* <div className="calling-text">Answered...</div> */}
                <div className="next3-nametext">Harsh Patel</div>
                {/* <div className="next2-numbertext">
    +91 992559592
    </div> */}
                <div className="next3-timetext">0:{minutes}:{seconds}</div>
              </div>
              <Container>
                <div className={`col-md-12 ${classDisplay2} shadow-none p-4`}>
                  <div className="d-flex">
                    <span className="btn-recording" data-tooltip="Recording">
                      <i className="bi bi-circle-fill icon-recording-custom" />
                    </span>
                    <span className="btn-recording" data-tooltip="Speaker">
                      <i className="bi bi-pause-fill icon-speaker-custom" />
                    </span>
                    <span
                      className="btn-recording"
                      data-tooltip="Transfer"
                      onClick={() => handleReceive(5)}
                    >
                      <i className="bi bi-arrow-down-up icon-transfer-custom" />
                    </span>
                    <span
                      className="btn-recording"
                      data-tooltip="DTMF"
                      onClick={() => handleReceive(4)}
                    >
                      <i className="bi bi-grid-3x3-gap-fill icon-dtmf-custom" />
                    </span>
                  </div>
                </div>
              </Container>
              <div className="d-flex justify-content-around next3-bottom-btn">
                <span>
                  <i className="bi bi-megaphone-fill" />
                </span>
                <div className="btn-pointer" onClick={() => hangupCall()}>
                  <span className="d-flex next3-action-dig hangup">
                    <Icon.PhoneOff size={40} color="#FFF" />
                  </span>
                </div>
                {isMutted ? (
                  <span onClick={handleMuteClick}>
                    <i className="bi bi-mic-mute-fill icon-speaker-custom" />
                  </span>
                ) : (
                  <span onClick={handleMuteClick}>
                    <i className="bi bi-mic-fill icon-mute-custom" />
                  </span>
                )}
              </div>
            </div>
          </Container>
        </div>
      )}
      {displayFlag === 4 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className="dial-pad dial4-pad">
              <div className="contact">
                <div className="avatar"></div>
                <div className="contact-buttons">
                  <Button className="icon-message"></Button>
                  <Button className="icon-video"></Button>
                </div>
              </div>
              <div className="phoneString4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="rtl-input"
                />
              </div>
              <div className="digits4">
                {digits.map((digitObj) => (
                  <div
                    key={digitObj.digit}
                    className={`dig ${digitObj.subDigit ? 'number-dig' : digitObj.class}`}
                    name={digitObj.digit}
                    onClick={() => handleDigitClick(digitObj.digit)}
                  >
                    {digitObj.digit}
                    {digitObj.subDigit && <div className="sub-dig">{digitObj.subDigit}</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex next4-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next4-send">
                  <Icon.ChevronsUp size={40} color="#fff" />
                </span>
              </div>
              <div className="btn-pointer">
                <span className="next4-action-dig next4-back" onClick={() => handleBackScreen(2)}>
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 5 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            {/* <div className="next5-icon-container ">
              <div className="icon-box">
                <div className="row">
                  <div className="col-6">
                  <Icon.PhoneForwarded size={20} />
                  <div className='next5-font-size'>Queue Transfer</div>
                  </div>
                  <div className="col-6">
                  <Icon.UserCheck size={20} />
                  <div className='next5-font-size'>Agent Transfer</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                  <Icon.Repeat size={20} />
                  <div className='next5-font-size'>External Transfer</div>
                  </div>
                  <div className="col-6">
                  <i className="bi bi-diagram-3-fill icon-dtmf-custom" />
                  <div className='next5-font-size'>IVF Transfer</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                  <Icon.RefreshCw size={20} />
                  <div className='next5-font-size'>Ring Group</div>
                  </div>
                  <div className="col-6">
                  <Icon.ChevronsLeft size={20} />
                  <div className='next5-font-size'>Back</div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="next5-icon-container">
              <div className="row">
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(9)}
                  >
                    <Icon.PhoneForwarded className="" />
                    <div className="next5-font-size">Queue Transfer</div>
                  </span>
                </div>
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(6)}
                  >
                    <Icon.UserCheck className="" />
                    <div className="next5-font-size">Agent Transfer</div>
                  </span>
                </div>

                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(7)}
                  >
                    <Icon.Repeat className="" />
                    <div className="next5-font-size">External Transfer</div>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(8)}
                  >
                    <i className="bi bi-diagram-3-fill" />
                    <div className="next5-font-size">IVF Transfer</div>
                  </span>
                </div>
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(10)}
                  >
                    <Icon.RefreshCw className="" />
                    <div className="next5-font-size">Ring Group</div>
                  </span>
                </div>
                <div className="col-2 next5-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleBackScreen(2)}
                  >
                    <Icon.ChevronsLeft className="" />
                    <div className="next5-font-size">Back</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around next5-bottom-btn">
              <span>
                <i className="bi bi-megaphone-fill" />
              </span>
              <div className="btn-pointer" onClick={() => hangupCall()}>
                <span className="d-flex next3-action-dig hangup">
                  <Icon.PhoneOff size={40} color="#FFF" />
                </span>
              </div>
              {isMutted ? (
                <span onClick={handleMuteClick}>
                  <i className="bi bi-mic-mute-fill icon-speaker-custom" />
                </span>
              ) : (
                <span onClick={handleMuteClick}>
                  <i className="bi bi-mic-fill icon-mute-custom" />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      {displayFlag === 6 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className={`${classNextTop6Container} shadow-lg p-2 mb-5  rounded`}>
              <div className="d-flex justify-content-center">
                <Label className={`${classDisplayLabel6}`}>Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className={`${classDisplayLabel6}`}>Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container mt-3">
                  <Label className={` ${classDisplaySipLabel6}`}>Sip Devices</Label>
                  <Select
                    options={options}
                    isSearchable
                    onChange={handleSelect}
                    className="col-md-10 select-custom-color"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex next6-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 7 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>

            <div className={`${classDisplay6} shadow-lg p-2 mb-5  rounded`}>
              <div className="d-flex justify-content-center">
                <Label className={`${classDisplayLabel6}`}>Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className={`${classDisplayLabel6}`}>Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container">
                  <FormGroup>
                    <Row>
                      <Label sm="2" className={`${classDisplayPhoneLabel7}`}>
                        Enter Number
                      </Label>
                      <Col sm="10">
                        <InputGroup>
                          <InputGroupText>
                            <i className="bi bi-phone-vibrate-fill next7-phone-icon"></i>
                          </InputGroupText>
                          <Input type="text" placeholder="Phone Number" />
                        </InputGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="d-flex next6-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 8 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className={`${classDisplay6} shadow-lg p-2 mb-5  rounded`}>
              <div className=" mt-3 ">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className={`${classDisplayLabel6}`}>IVR Devices</Label>
                      <Select
                        options={options}
                        isSearchable
                        onChange={handleSelect}
                        className="col-md-12 select-custom-color"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="d-flex next8-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 9 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>

            <div className={`${classDisplay6} shadow-lg p-2 mb-5  rounded`}>
              <div className="d-flex justify-content-center">
                <Label className={`${classDisplayLabel6}`}>Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className={`${classDisplayLabel6}`}>Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container mt-3">
                  <Label className={`${classDisplaySipLabel6} col-md-2`}>Call Queue</Label>
                  <Select
                    options={options}
                    isSearchable
                    onChange={handleSelect}
                    className="col-lg-10 select-custom-color"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex next9-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call">
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 10 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>

            <div className={`${classDisplay6} shadow-lg p-2 mb-5  rounded`}>
              <div className="d-flex justify-content-center">
                <Label className={`${classDisplayLabel6}`}>Blind Transfer</Label>
                <div>
                  <Label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </Label>
                </div>
                <Label className={`${classDisplayLabel6}`}>Attended Transfer</Label>
              </div>
              <div>
                <div className="dropdown-container mt-3">
                  <Label className={`${classDisplaySipLabel6} col-md-2`}>Ring Group</Label>
                  <Select
                    options={options}
                    isSearchable
                    onChange={handleSelect}
                    className="col-lg-10 select-custom-color"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex next9-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next6-call" onClick={() => handleReceive(11)}>
                  <Icon.Phone size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next4-back cust-tooltip"
                  data-tooltip="Back"
                  onClick={() => handleBackScreen(5)}
                >
                  <Icon.ChevronLeft size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {displayFlag === 11 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                <div className="calling4-text">Calling...</div>
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next4-timetext">10:10:10</div>
              </div>
            </div>
            <div className="next5-icon-container ">
              <div className="row">
                <div className="col-4 next11-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(9)}
                  >
                    <Icon.PhoneOff className="" />
                    <div className="next5-font-size">Hang-up both lines</div>
                  </span>
                </div>
                <div className="col-4 next11-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(6)}
                  >
                    <i className="bi bi-grid-1x2" />
                    <div className="next5-font-size">Leave 3-way</div>
                  </span>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 next11-icon-size btn-pointer">
                  <span
                    className="shadow p-1 mb-3 bg-white rounded next5-display-icon"
                    onClick={() => handleReceive(9)}
                  >
                    <Icon.PhoneIncoming className="" />
                    <div className="next5-font-size">Xfer line hangup</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around next5-bottom-btn">
              <span>
                <i className="bi bi-megaphone-fill" />
              </span>
              <div className="btn-pointer"  onClick={() => hangupCall()}>
                <span className="d-flex next3-action-dig hangup cust-tooltip" data-tooltip="Hangup">
                  <Icon.PhoneOff size={40} color="#FFF" />
                </span>
              </div>
              {isMutted ? (
                <span onClick={handleMuteClick}>
                  <i className="bi bi-mic-mute-fill icon-speaker-custom" />
                </span>
              ) : (
                <span onClick={handleMuteClick}>
                  <i className="bi bi-mic-fill icon-mute-custom" />
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      {displayFlag === 12 && (
        <div className="custom-dial-pad">
          <div className="pad">
            <div className="avatar4-container">
              <div className="avatar4">
                <div className="avatar4-placeholder">HP</div>
              </div>
              <div>
                {/* <div className="calling4-text">Hangup</div> */}
                <div className="next4-nametext">Harsh Patel</div>
                <div className="next3-timetext">0:{addNoteMinutes}:{addNoteSeconds}</div>
              </div>
            </div>
            <div className={`${classDisplay12} shadow-lg p-2 mb-5  rounded`}>
              <div className="">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className={`${classDisplayLabelFont12}`}>Add Note</Label>
                      <Input type="textarea" rows="5" />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="d-flex next12-justify-content-evenly">
              <div className="btn-pointer">
                <span className="next4-action-dig next12-call cust-tooltip" data-tooltip="Submit">
                  <Icon.Check size={40} color="#FFF" />
                </span>
              </div>
              <div className="btn-pointer">
                <span
                  className="next4-action-dig next12-back cust-tooltip"
                  data-tooltip="Cancle"
                  onClick={() => handleBackScreen(3)}
                >
                  <Icon.X size={40} color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}