export const handleTEReason = (reason: unknown): Error => {
	if (reason instanceof Error) {
		return reason;
	}
	return new Error(`${reason}`);
};
