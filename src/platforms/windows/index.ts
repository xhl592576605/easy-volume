import * as os from 'os'
import { dirname, join } from 'path'
import { execCommand } from '../../execCommand'
import {
  GetVolumeError,
  PlatformImplementation,
  SetVolumeError
} from '../../types'
import toElectronPath from '../../utils/toElectronPath'
const getVolume = () => {
	return `volume-${os.arch() === 'ia32' ? '32' : '64'}.exe`
}

export const windows: PlatformImplementation = {
	getVolume: async () => {
		const response = await execCommand(
			toElectronPath(join(dirname(__filename), getVolume())),
			['get']
		)

		if (isNaN(parseInt(response)) || parseInt(response) === -1)
			throw new GetVolumeError()
		return parseInt(response)
	},
	setVolume: async (val: number) => {
		if (val < 0 || val > 100) throw new SetVolumeError()

		const response = await execCommand(
			toElectronPath(join(dirname(__filename), getVolume())),

			['set', val.toString()]
		)

		if (isNaN(parseInt(response)) || parseInt(response) === -1)
			throw new SetVolumeError()
	},
	getMute: async () => {
		const response = await execCommand(
			toElectronPath(join(dirname(__filename), getVolume())),

			['mute_status']
		)

		let isMuted = response !== '0'
		return isMuted
	},
	setMute: async (isMuted: boolean) => {
		await execCommand(
			toElectronPath(join(dirname(__filename), getVolume())),
			[isMuted ? 'mute' : 'unmute']
		)
	}
}
