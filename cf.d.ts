/**
 * In addition to the properties on the standard Request object,
 * the cf object contains extra information about the request provided
 * by Cloudflare's edge.
 *
 * Note: Currently, settings in the cf object cannot be accessed in the
 * playground.
 */
export interface IncomingRequestCfProperties {
    /**
     *  (e.g. 395747)
     */
    asn: number;
    botManagement?: {
      score: number;
      staticResource: boolean;
      verifiedBot: boolean;
    };
    city?: string;
    clientTcpRtt: number;
    clientTrustScore?: number;
    /**
     * The three-letter airport code of the data center that the request
     * hit. (e.g. "DFW")
     */
    colo: string;
    continent?: string;
    /**
     * The two-letter country code in the request. This is the same value
     * as that provided in the CF-IPCountry header. (e.g. "US")
     */
    country: string;
    httpProtocol: string;
    latitude?: string;
    longitude?: string;
    /**
     * DMA metro code from which the request was issued, e.g. "635"
     */
    metroCode?: string;
    postalCode?: string;
    /**
     * e.g. "Texas"
     */
    region?: string;
    /**
     * e.g. "TX"
     */
    regionCode?: string;
    /**
     * e.g. "weight=256;exclusive=1"
     */
    requestPriority: string;
    /**
     * e.g. "America/Chicago"
     */
    timezone?: string;
    tlsVersion: string;
    tlsCipher: string;
    tlsClientAuth?: {
      certIssuerDNLegacy: string;
      certIssuerDN: string;
      certPresented: '0' | '1';
      certSubjectDNLegacy: string;
      certSubjectDN: string;
      certNotBefore: string; // In format "Dec 22 19:39:00 2018 GMT"
      certNotAfter: string; // In format "Dec 22 19:39:00 2018 GMT"
      certSerial: string;
      certFingerprintSHA1: string;
      certVerified: string; // “SUCCESS”, “FAILED:reason”, “NONE”
    };
  }



/*
Source: https://github.com/cloudflare/workers-types/blob/64a05eb932ef931bf8fe1ced8011a9ebf4d817fd/index.d.ts#L216
BSD 3-Clause License

Copyright (c) 2020, Cloudflare, Inc. and contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
