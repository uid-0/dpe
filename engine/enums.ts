export enum ItemType {
	Module,
	Clothing,
	Quest,
	Consumable,Key
};

export enum ModuleSlot {
	StandardL,	// Standard Slot for L-Mods
	StandardE,	// Standard Slot for E-Mods
	Hybrid			// Fits Standard L and E
};

export enum BPSlotState {
	Locked,			// Slot is locked, can be picked/hacked
	Unlocked,		// Slot is unlocked and modules can be added/removed
	QuestLocked	// Slot is locked and cannot be removed
};
