export const handleTEReason = (reason: unknown): Error => {
	if (reason instanceof Error) {
		return reason;
	}
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	return new Error(`${reason}`);
};
