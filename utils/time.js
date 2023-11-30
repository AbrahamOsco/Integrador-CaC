// @ts-check
const { Temporal } = require('@js-temporal/polyfill')

/**
 * This function receives a product
 * checks its create_time property
 * and returns if that is newer than another fixed date
 * @param {Date} timestamp
 * @returns {boolean}
 */
function timestampIsNew(timestamp) {
	if (!timestamp || !(timestamp instanceof Date)) {
		console.error('Wrong timestamp format')
		return false
	}
	try {
		const now = Temporal.Now.zonedDateTimeISO()
		const oneWeek = Temporal.Duration.from({ weeks: 2 })
		const nowMinusOneWeek = now.subtract(oneWeek)

		const myTimestamp = nowMinusOneWeek.toInstant()
		const dbTimestamp = Temporal.Instant.fromEpochMilliseconds(timestamp.getTime())

		const compareResult = Temporal.Instant.compare(dbTimestamp, myTimestamp)
		const isNew = compareResult > 0

		return isNew
	} catch (error) {
		console.error('Error while parsing date')
		return false
	}
}

module.exports = {
	timestampIsNew,
}
