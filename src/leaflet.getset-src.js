/*
# ===========================================================================
# JavaScript-Modul: leaflet.getset.js
# (C) Juergen Dankoweit, 2016
# ===========================================================================
# Datum:      Ergaenzung:
# ---------------------------------------------------------------------------
# 25.11.2016: Fertigstellung des Moduls

*/

/*
 * Copyright (c) 2016 J. Dankoweit
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions, and the following disclaimer,
 *    without modification, immediately at the beginning of the file.
 * 2. The name of the author may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
*/



L.Class.include({
	_privateData: null,
	get: function(strKey) {
		if (!this._privateData)
			return null;
		return this._privateData[strKey];
	},
	set: function(strKey, newValue, bFireEvent) {
		if (!this._privateData)
			this._privateData = new Array();
		
		var oldValue = this._privateData[strKey];
		
		if (newValue != null)
			this._privateData[strKey] = newValue;
		else
			delete this._privateData[strKey];
		
		if (bFireEvent)
			this.fire("changeprivatedata", {key: strKey, oldValue: oldValue, newValue: newValue}, false);
	}
});

